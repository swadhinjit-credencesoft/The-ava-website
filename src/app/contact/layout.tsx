import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact The AVA Hotel Chikkamagaluru",
  description: "Call +91 7899738550 or email bookings@theavahotel.com. NH 173, Haandi, Chikkamagaluru — directions from Bangalore, Mangalore & Hassan.",
  openGraph: {
    title: "Contact — The AVA Hotel Chikkamagaluru",
    description: "Get directions, call us, or send an enquiry. NH 173, Haandi, Chikkamagaluru, Karnataka 577111.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
