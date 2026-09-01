import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The AVA Hotel Chikkamagaluru",
  description: "Call +91 7899738550 or email bookings@theavahotel.com. NH 173, Haandi, Chikkamagaluru — directions from Bangalore, Mangalore & Hassan.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — The AVA Hotel Chikkamagaluru",
    description: "Get directions, call us, or send an enquiry. NH 173, Haandi, Chikkamagaluru, Karnataka 577111.",
    url: "https://theavahotel.in/contact",
    type: "website",
    siteName: "The AVA Hotel",
    images: [{ url: "/shalimarhomeimg.png", width: 1200, height: 900, alt: "Contact The AVA Hotel Chikkamagaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — The AVA Hotel Chikkamagaluru",
    description: "Get directions, call us, or send an enquiry. NH 173, Haandi, Chikkamagaluru, Karnataka 577111.",
    images: ["/shalimarhomeimg.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
