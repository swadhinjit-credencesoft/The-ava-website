import { hotelData } from "./siteData";

export interface PageHeroData {
  image: string;
  brightness?: number;
  label: string;
  title: string;
  subtitle: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant: "gold" | "white" | "outline" | "dark";
  testId?: string;
}

export interface CtaData {
  label: string;
  title: string;
  buttons: CtaButton[];
}

export interface PageContent {
  hero: PageHeroData;
  cta: CtaData;
  breadcrumb: { label: string; href?: string }[];
}

export const pages: Record<string, PageContent> = {
  "/rooms": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Rooms" }],
    hero: {
      image: "/quardroom.webp",
      label: "Accommodation",
      title: "STAY WITH US",
      subtitle: "Four categories of luxury rooms, each designed for comfort and elegance",
    },
    cta: {
      label: "Ready to Book?",
      title: "CALL US DIRECTLY",
      buttons: [
        { label: hotelData.phone, href: "tel:+917899738550", variant: "gold", testId: "button-rooms-call" },
        { label: "Book Now", href: hotelData.bookingEngineUrl, variant: "white", testId: "button-rooms-book" },
      ],
    },
  },
  "/amenities": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Amenities" }],
    hero: {
      image: "/avadining.jpg",
      label: "Facilities",
      title: "WHAT WE OFFER",
      subtitle: "Premium facilities designed for an uncompromising luxury stay",
    },
    cta: {
      label: "Experience Luxury",
      title: "BOOK YOUR STAY",
      buttons: [
        { label: "Book Now", href: hotelData.bookingEngineUrl, variant: "gold", testId: "button-amenities-book" },
        { label: "View Rooms", href: "/rooms", variant: "outline", testId: "button-amenities-rooms" },
      ],
    },
  },
  "/tour": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Tour & Nearby" }],
    hero: {
      image: "kailash-reddy-ku-UUxOngp3p4w-unsplash.jpg",
      label: "Western Ghats",
      title: "EXPLORE NEARBY",
      subtitle: "Discover Karnataka's most treasured landscapes and landmarks",
    },
    cta: {
      label: "Start Your Adventure",
      title: "PLAN YOUR VISIT",
      buttons: [
        { label: "Call Us", href: "tel:+917899738550", variant: "gold", testId: "button-tour-call" },
        { label: "Book a Room", href: hotelData.bookingEngineUrl, variant: "outline", testId: "button-tour-book" },
      ],
    },
  },
  "/contact": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
    hero: {
      image: "/shalimarhomeimg.png",
      brightness: 0.5,
      label: "The AVA",
      title: "CONTACT US",
      subtitle: "We look forward to welcoming you. Reach out for reservations, events, or any enquiries.",
    },
    cta: {
      label: "",
      title: "",
      buttons: [],
    },
  },
  "/explore": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Explore" }],
    hero: {
      image: "/tour.jpg",
      brightness: 0.4,
      label: "Western Ghats",
      title: "EXPLORE",
      subtitle: "Curated travel guides to help you discover the best of Chikkamagaluru",
    },
    cta: {
      label: "",
      title: "",
      buttons: [],
    },
  },
  "/events": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Events" }],
    hero: {
      image: hotelData.events.image,
      brightness: 0.4,
      label: "The AVA",
      title: "MEETINGS & EVENTS",
      subtitle: "2500+ Sq.Ft pillarless ballroom for your most memorable occasions",
    },
    cta: {
      label: "",
      title: "",
      buttons: [],
    },
  },
};
