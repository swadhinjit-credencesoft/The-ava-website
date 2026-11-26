import { ApiRoom, CheckAvailabilityApiResponse, Room, RoomRatePlan } from "@/types/room";

export const HOTEL_PROPERTY_ID = 3563;
export const API_BASE_URL = "https://api.thehotelmate.co/api/thm/checkAvailability";

export const KNOWN_ROOM_IDS = [
  "8692",
  "8693",
  "8694",
  "8695",
  "executive",
  "estateview",
  "premium",
  "quad",
];

function cleanHtml(html: string | null | undefined): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "").trim();
}

function deriveSlug(name: string, id: number): string {
  const lower = name.toLowerCase();
  if (lower.includes("executive")) return "executive";
  if (lower.includes("estate")) return "estateview";
  if (lower.includes("premium")) return "premium";
  if (lower.includes("quad")) return "quad";
  return lower.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `room-${id}`;
}

function deriveType(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("executive")) return "Executive Suite";
  if (lower.includes("estate")) return "Estate View";
  if (lower.includes("premium")) return "Premium Luxury";
  if (lower.includes("quad")) return "Quad Family Suite";
  return "Boutique Luxury";
}

function deriveDefaultSize(name: string): string {
  const lower = name.toLowerCase();
  if (lower.includes("quad")) return "420 sq.ft";
  if (lower.includes("executive")) return "400 sq.ft";
  if (lower.includes("estate")) return "360 sq.ft";
  if (lower.includes("premium")) return "340 sq.ft";
  return "350 sq.ft";
}

function determinePlanType(name: string): "EP" | "CP" | "MAP" | "AP" | "OTHER" {
  const upper = name.toUpperCase();
  if (upper.includes("CP") || upper.includes("BREAKFAST")) return "CP";
  if (upper.includes("EP") || upper.includes("ROOM ONLY")) return "EP";
  if (upper.includes("MAP")) return "MAP";
  if (upper.includes("AP")) return "AP";
  return "OTHER";
}

function getPlanInclusions(planType: "EP" | "CP" | "MAP" | "AP" | "OTHER"): string[] {
  switch (planType) {
    case "CP":
      return [
        "Complimentary Breakfast",
        "Free High-Speed WiFi",
        "24-hr Hot Water",
        "Access to In-House Dining",
        "Room Service",
      ];
    case "EP":
      return [
        "Room Accommodation",
        "Free High-Speed WiFi",
        "24-hr Hot Water",
        "Room Service Available",
        "Daily Housekeeping",
      ];
    case "MAP":
      return [
        "Breakfast & Dinner Included",
        "Free High-Speed WiFi",
        "24-hr Hot Water",
        "Priority Dining Seating",
      ];
    default:
      return [
        "Standard Room Stay",
        "Free High-Speed WiFi",
        "24-hr Hot Water",
        "Essential Amenities",
      ];
  }
}

export function transformApiRoomToRoom(apiRoom: ApiRoom): Room {
  const images = (apiRoom.imageList || [])
    .map((img) => img.url)
    .filter(Boolean);

  const mainImage = images[0] || "/estateview.jpeg";

  const features = (apiRoom.roomFacilities || [])
    .map((f) => f.name)
    .filter(Boolean);

  const minOcc = apiRoom.minimumOccupancy || 2;
  const maxOcc = apiRoom.maximumOccupancy || (minOcc > 3 ? minOcc + 1 : 3);
  const occupancyText =
    minOcc === maxOcc ? `${minOcc} Guests` : `${minOcc} - ${maxOcc} Guests`;

  // Parse all rate plans from ratesAndAvailabilityDtos
  const plansMap = new Map<
    string,
    { code: string; name: string; totalAmount: number; count: number; extraCharge: number }
  >();

  if (apiRoom.ratesAndAvailabilityDtos && Array.isArray(apiRoom.ratesAndAvailabilityDtos)) {
    for (const dto of apiRoom.ratesAndAvailabilityDtos) {
      if (dto.roomRatePlans && Array.isArray(dto.roomRatePlans)) {
        for (const p of dto.roomRatePlans) {
          if (p.active !== false && p.amount > 0) {
            const existing = plansMap.get(p.code);
            if (existing) {
              existing.totalAmount += p.amount;
              existing.count += 1;
            } else {
              plansMap.set(p.code, {
                code: p.code,
                name: p.name,
                totalAmount: p.amount,
                count: 1,
                extraCharge: p.extraChargePerPerson || 0,
              });
            }
          }
        }
      }
    }
  }

  const parsedPlans: RoomRatePlan[] = [];

  if (plansMap.size > 0) {
    for (const entry of plansMap.values()) {
      const avgAmount = Math.round(entry.totalAmount / entry.count);
      const planType = determinePlanType(entry.name);
      parsedPlans.push({
        code: entry.code,
        name: entry.name,
        planType,
        amount: avgAmount,
        formattedPrice: `₹${avgAmount.toLocaleString("en-IN")}`,
        description: null,
        active: true,
        extraChargePerPerson: entry.extraCharge,
        inclusions: getPlanInclusions(planType),
      });
    }
    // Sort plans by amount ascending
    parsedPlans.sort((a, b) => a.amount - b.amount);
  } else {
    // If no date-specific DTO rate plans returned, create the standard EP and CP plans
    const base = apiRoom.roomOnlyPrice || 2500;
    const breakfastDelta = apiRoom.id === 8695 ? 1700 : 550;

    parsedPlans.push({
      code: `EP-${apiRoom.id}`,
      name: "Room Only Plan (EP)",
      planType: "EP",
      amount: base,
      formattedPrice: `₹${base.toLocaleString("en-IN")}`,
      description: "Standard room accommodation without meals.",
      active: true,
      extraChargePerPerson: apiRoom.extraChargePerPerson || 900,
      inclusions: getPlanInclusions("EP"),
    });

    const cpAmount = base + breakfastDelta;
    parsedPlans.push({
      code: `CP-${apiRoom.id}`,
      name: "Room with Breakfast Plan (CP)",
      planType: "CP",
      amount: cpAmount,
      formattedPrice: `₹${cpAmount.toLocaleString("en-IN")}`,
      description: "Includes complimentary fresh breakfast spread each morning.",
      active: true,
      extraChargePerPerson: apiRoom.extraChargePerPerson || 900,
      inclusions: getPlanInclusions("CP"),
    });
  }

  // The lowest plan amount is the starting room rate
  const rawPrice = parsedPlans.length > 0 ? parsedPlans[0].amount : (apiRoom.roomOnlyPrice || 2500);
  const formattedPrice = `₹${rawPrice.toLocaleString("en-IN")}`;

  return {
    id: String(apiRoom.id),
    apiId: apiRoom.id,
    slug: deriveSlug(apiRoom.name, apiRoom.id),
    name: apiRoom.name,
    type: deriveType(apiRoom.name),
    description: cleanHtml(apiRoom.description) || "Spacious boutique accommodation with modern amenities on NH 173.",
    image: mainImage,
    images: images.length > 0 ? images : [mainImage],
    price: formattedPrice,
    rawPrice,
    size: apiRoom.size || deriveDefaultSize(apiRoom.name),
    occupancy: occupancyText,
    minOccupancy: minOcc,
    maxOccupancy: maxOcc,
    features:
      features.length > 0
        ? features
        : ["Wifi", "Flat TV", "Room Service", "Geyser", "24 Hours Room Service", "Hand Sanitizer"],
    plans: parsedPlans,
  };
}

export async function fetchLiveRooms(params?: {
  fromDate?: string;
  toDate?: string;
  noOfPersons?: number;
  noOfRooms?: number;
}): Promise<Room[]> {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  const fromDate = params?.fromDate || formatDate(today);
  const toDate = params?.toDate || formatDate(tomorrow);
  const noOfPersons = params?.noOfPersons ?? 1;
  const noOfRooms = params?.noOfRooms ?? 1;

  const url = `${API_BASE_URL}/${HOTEL_PROPERTY_ID}?fromDate=${fromDate}&toDate=${toDate}&noOfRooms=${noOfRooms}&noOfPersons=${noOfPersons}`;

  const isServer = typeof window === "undefined";

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    cache: isServer ? "force-cache" : "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch room availability: ${res.status} ${res.statusText}`);
  }

  const data: CheckAvailabilityApiResponse = await res.json();
  if (!data.roomList || !Array.isArray(data.roomList)) {
    throw new Error("Invalid response format: missing roomList");
  }

  return data.roomList.map(transformApiRoomToRoom);
}
