export interface HotelMateRatePlan {
  name: string;
  amount: number;
  currencyCode: string;
}

export interface HotelMateRoom {
  id: string;
  apiId: number | string;
  name: string;
  type: string;
  description: string;
  image: string;
  images: string[];
  price: number | null;
  formattedPrice: string | null;
  currency: string;
  pricePlan: string | null;
  ratePlans: HotelMateRatePlan[];
  size: string | null;
  minimumOccupancy: number | null;
  maximumOccupancy: number | null;
  occupancy: string | null;
  features: string[];
  availableRooms: number | null;
  isAvailable: boolean | null;
}

export interface HotelMateAvailability {
  name: string;
  currency: string;
  images: string[];
  rooms: HotelMateRoom[];
}

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asRecords(value: unknown): RecordValue[] {
  return Array.isArray(value) ? value.filter(isRecord) : [];
}

function positiveNumber(value: unknown): number | null {
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function finiteNumber(value: unknown): number | null {
  if (value === null || value === undefined || value === "") return null;
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) ? number : null;
}

function cleanDescription(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/<\/?(?:p|div|br|li|ul|ol|h[1-6])\b[^>]*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function getImages(value: unknown): string[] {
  return asRecords(value)
    .map((item) => item.url)
    .filter((url): url is string => typeof url === "string" && /^https?:\/\//i.test(url));
}

function roomSlug(name: string, id: unknown): string {
  const normalized = name.toLowerCase();
  if (normalized.includes("cliff")) return "cliff-view";
  if (normalized.includes("family")) return "family";
  if (normalized.includes("glass") || normalized.includes("jacuz")) return "glass-jacuzzi";
  if (normalized.includes("bung") || normalized.includes("villa")) return "bungalow";
  if (normalized.includes("standard")) return "standard";
  return String(id ?? normalized.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "room"));
}

function normalizeRoom(room: RecordValue, propertyImages: string[], currency: string): HotelMateRoom {
  const roomName = typeof room.name === "string" ? room.name : "Room";
  const rows = asRecords(room.ratesAndAvailabilityDtos);
  const allPlans = rows.flatMap((row) => asRecords(row.roomRatePlans));
  const plansWithRates = allPlans
    .filter((plan) => plan.active !== false)
    .map((plan) => ({
      name: typeof plan.name === "string" ? plan.name : "Rate plan",
      amount: positiveNumber(plan.amount),
      currencyCode: typeof plan.currencyCode === "string" ? plan.currencyCode : currency,
    }))
    .filter((plan): plan is HotelMateRatePlan => plan.amount !== null);
  const activePlans = [...new Map(plansWithRates.map((plan) => [`${plan.name}-${plan.amount}-${plan.currencyCode}`, plan])).values()];

  const roomOnlyPlan = activePlans.find((plan) => /room\s*only/i.test(plan.name));
  const selectedPlan = roomOnlyPlan ?? [...activePlans].sort((a, b) => a.amount - b.amount)[0] ?? null;
  const price = selectedPlan?.amount ?? positiveNumber(room.roomOnlyPrice) ?? positiveNumber(room.pricePerNight);
  const priceCurrency = selectedPlan?.currencyCode ?? currency;
  const images = getImages(room.imageList);
  const combinedImages = images.length ? images : propertyImages;
  const features = asRecords(room.roomFacilities)
    .map((facility) => facility.name)
    .filter((name): name is string => typeof name === "string" && name.trim().length > 0);
  const amenities = asRecords(room.amenities)
    .map((amenity) => amenity.name)
    .filter((name): name is string => typeof name === "string" && name.trim().length > 0);
  const allFeatures = [...new Set([...features, ...amenities])];
  const counts = rows.map((row) => finiteNumber(row.noOfAvailable)).filter((count): count is number => count !== null);
  const minimumOccupancy = positiveNumber(room.minimumOccupancy);
  const maximumOccupancy = positiveNumber(room.maximumOccupancy);
  const size = typeof room.size === "string" && room.size.trim() ? room.size.trim() : null;
  const occupancy = maximumOccupancy
    ? `${minimumOccupancy ?? 1}${minimumOccupancy === maximumOccupancy ? "" : `-${maximumOccupancy}`} ${maximumOccupancy === 1 ? "Guest" : "Guests"}`
    : null;
  const hasAvailabilityRows = rows.length > 0;
  const hasUnavailableRate = rows.some((row) => {
    const count = finiteNumber(row.noOfAvailable);
    const status = typeof row.status === "string" ? row.status.toLowerCase() : "";
    return (count !== null && count <= 0) || row.stopSellOBE === true || row.stopSellOTA === true || ["closed", "unavailable", "stop sell"].includes(status);
  });

  return {
    id: roomSlug(roomName, room.id),
    apiId: typeof room.id === "number" || typeof room.id === "string" ? room.id : roomName,
    name: roomName,
    type: typeof room.businessProductName === "string" ? room.businessProductName : "",
    description: cleanDescription(room.description),
    image: combinedImages[0] ?? "",
    images: combinedImages,
    price,
    formattedPrice: price === null ? null : new Intl.NumberFormat("en-IN", { style: "currency", currency: priceCurrency, maximumFractionDigits: 0 }).format(price),
    currency: priceCurrency,
    pricePlan: selectedPlan?.name ?? null,
    ratePlans: activePlans,
    size,
    minimumOccupancy,
    maximumOccupancy,
    occupancy,
    features: allFeatures,
    availableRooms: counts.length ? Math.min(...counts) : null,
    isAvailable: hasAvailabilityRows ? !hasUnavailableRate : null,
  };
}

export function normalizeHotelMateAvailability(payload: unknown): HotelMateAvailability {
  if (!isRecord(payload)) throw new Error("The booking service returned an invalid response.");
  const property = isRecord(payload.data) ? payload.data : payload;
  const currency = typeof property.localCurrency === "string" ? property.localCurrency : "INR";
  const images = getImages(property.imageList);
  const rooms = asRecords(property.roomList).map((room) => normalizeRoom(room, images, currency));

  return {
    name: typeof property.name === "string" ? property.name : "",
    currency,
    images,
    rooms,
  };
}

export interface AvailabilityQuery {
  fromDate: string;
  toDate: string;
  noOfRooms: number;
  noOfPersons: number;
}

export async function fetchHotelMateAvailability(query: AvailabilityQuery): Promise<HotelMateAvailability> {
  const propertyId = process.env.NEXT_PUBLIC_HOTELMATE_PROPERTY_ID || "3521";
  const url = new URL(`https://api.thehotelmate.co/api/thm/checkAvailability/${encodeURIComponent(propertyId)}`);
  url.search = new URLSearchParams({
    fromDate: query.fromDate,
    toDate: query.toDate,
    noOfRooms: String(query.noOfRooms),
    noOfPersons: String(query.noOfPersons),
  }).toString();

  const response = await fetch(url.toString(), { cache: "no-store", headers: { Accept: "application/json" } });
  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const message = isRecord(payload) && typeof payload.message === "string" ? payload.message : "Could not load live room details.";
    throw new Error(message);
  }

  return normalizeHotelMateAvailability(payload);
}
