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

const cdn = "https://bookonelocal.in/cdn";

export const pages: Record<string, PageContent> = {
  "/rooms": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Stay" }],
    hero: { image: `${cdn}/2026-04-02-073101502-DSC08801.jpg`, label: "Stay at The Mountain", title: "STAY WITH US", subtitle: "Mountain-view rooms, private jacuzzi stays and a bungalow villa in Karjat" },
    cta: { label: "Ready to Book?", title: "PLAN YOUR STAY", buttons: [
      { label: hotelData.phone, href: "tel:+919833866655", variant: "gold", testId: "button-rooms-call" },
      { label: "Book Now", href: hotelData.bookingEngineUrl, variant: "white", testId: "button-rooms-book" }
    ] }
  },
  "/amenities": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Experiences" }],
    hero: { image: `${cdn}/DSC08837.avif`, label: "Resort Experiences", title: "MAKE YOUR STAY", subtitle: "Mountain views, poolside moments, dining and celebration spaces across a private estate" },
    cta: { label: "Experience Karjat", title: "BOOK YOUR STAY", buttons: [
      { label: "Book Now", href: hotelData.bookingEngineUrl, variant: "gold", testId: "button-amenities-book" },
      { label: "View Stays", href: "/rooms", variant: "outline", testId: "button-amenities-rooms" }
    ] }
  },
  "/tour": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Nearby" }],
    hero: { image: `${cdn}/DSC08846.avif`, label: "Karjat, Maharashtra", title: "EXPLORE NEARBY", subtitle: "Mountain scenery, outdoor escapes and heritage experiences around Karjat" },
    cta: { label: "Start Your Escape", title: "PLAN YOUR VISIT", buttons: [
      { label: "Call Us", href: "tel:+919833866655", variant: "gold", testId: "button-tour-call" },
      { label: "Book a Stay", href: hotelData.bookingEngineUrl, variant: "outline", testId: "button-tour-book" }
    ] }
  },
  "/contact": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Contact" }],
    hero: { image: `${cdn}/DSC08812.avif`, brightness: 0.5, label: "The Mountain Resort · By Redwings", title: "CONTACT US", subtitle: "Reach out for room availability, wedding plans, event quotations or travel details." },
    cta: { label: "", title: "", buttons: [] }
  },
  "/explore": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Explore" }],
    hero: { image: `${cdn}/DSC08758.avif`, brightness: 0.4, label: "Karjat, Maharashtra", title: "EXPLORE", subtitle: "Ideas for a mountain getaway, family holiday or celebration weekend" },
    cta: { label: "", title: "", buttons: [] }
  },
  "/events": {
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Weddings & Events" }],
    hero: { image: hotelData.events.image, brightness: 0.4, label: "The Mountain Resort · By Redwings", title: "WEDDINGS & EVENTS", subtitle: "Celebrate across a private 7-acre mountain estate, with spaces for 20 to 500 guests" },
    cta: { label: "", title: "", buttons: [] }
  }
};
