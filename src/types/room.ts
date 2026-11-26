export interface RoomFacility {
  id: number;
  organisationId?: number;
  name: string;
  description?: string;
  logoUrl?: string;
  imageUrl?: string;
}

export interface RoomImage {
  id: number | null;
  name: string | null;
  url: string;
  description: string | null;
  mainImage: boolean;
}

export interface ApiRatePlan {
  code: string;
  name: string;
  amount: number;
  description?: string | null;
  active?: boolean;
  extraChargePerPerson?: number;
  extraChargePerChild?: number;
  [key: string]: unknown;
}

export interface ApiRateAvailabilityDto {
  id: number;
  date: string;
  price: number;
  noOfAvailable?: number;
  status?: string;
  roomRatePlans?: ApiRatePlan[];
  [key: string]: unknown;
}

export interface ApiRoom {
  id: number;
  name: string;
  description: string;
  propertyId: number;
  amenities?: unknown[];
  roomOnlyPrice: number;
  totalPriceServices?: number | null;
  totalPriceAmenities?: number | null;
  totalPriceRoom?: number | null;
  pricePerNight?: number | null;
  minimumOccupancy: number;
  maximumOccupancy: number;
  extraChargePerPerson?: number | null;
  noOfRooms?: number;
  imageList: RoomImage[];
  size?: string | null;
  roomFacilities?: RoomFacility[];
  ratesAndAvailabilityDtos?: ApiRateAvailabilityDto[] | null;
  [key: string]: unknown;
}

export interface CheckAvailabilityApiResponse {
  id: number;
  name: string;
  shortName: string;
  address?: {
    streetName?: string;
    streetNumber?: string;
    postcode?: string;
    country?: string;
    [key: string]: unknown;
  };
  phone?: string;
  mobile?: string;
  email?: string;
  roomList: ApiRoom[];
  [key: string]: unknown;
}

export interface RoomRatePlan {
  code: string; // e.g. "E-2"
  name: string; // e.g. "Room with Breakfast Plan (CP)"
  planType: "EP" | "CP" | "MAP" | "AP" | "OTHER";
  amount: number; // e.g. 4550
  formattedPrice: string; // e.g. "₹4,550"
  description?: string | null;
  active: boolean;
  extraChargePerPerson: number;
  inclusions: string[];
}

export interface Room {
  id: string; // e.g. "8692" or "executive"
  apiId: number; // 8692
  slug: string; // "executive"
  name: string;
  type: string;
  description: string;
  image: string;
  images: string[];
  price: string;
  rawPrice: number;
  size: string;
  occupancy: string;
  minOccupancy: number;
  maxOccupancy: number;
  features: string[];
  plans: RoomRatePlan[];
}
