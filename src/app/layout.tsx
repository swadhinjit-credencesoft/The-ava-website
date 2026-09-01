import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const siteTitle = "The AVA Hotel Chikkamagaluru | Luxury Rooms on NH 173 near Mudigere";
const siteDescription = "Boutique hotel in Chikkamagaluru on NH 173. AC rooms, 24-hr checkout, restaurant, near Mullayanagiri treks and the Sringeri–Hornadu temple circuit. Book direct for best rates.";
const siteUrl = "https://theavahotel.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | The AVA Hotel Chikkamagaluru",
  },
  description: siteDescription,
  applicationName: "The AVA Hotel",
  category: "hotel",
  keywords: ["Chikkamagaluru hotel", "NH 173 resort", "The AVA", "Mudigere accommodation", "coffee plantation stay", "Chikmagalur luxury rooms", "The AVA Hotel Chikkamagaluru"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "The AVA Hotel",
    images: [{ url: "/estateview.jpeg", width: 1200, height: 900, alt: "The AVA Hotel Chikkamagaluru" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/estateview.jpeg"],
  },
  icons: {
    icon: "/avalogo111.png",
    apple: "/avalogo111.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "The AVA",
  alternateName: "The AVA Hotel Chikkamagaluru",
  description: siteDescription,
  url: siteUrl,
  telephone: "+917899738550",
  email: "bookings@theavahotel.com",
  priceRange: "₹2,499 – ₹3,999",
  checkinTime: "12:00",
  checkoutTime: "11:00",
  acceptsReservations: "True",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N H 173, K M Road, Haandi",
    addressLocality: "Chikkamagaluru",
    addressRegion: "Karnataka",
    postalCode: "577111",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.1654,
    longitude: 75.7856,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "In-house Restaurant" },
    { "@type": "LocationFeatureSpecification", name: "24-hour Front Desk" },
    { "@type": "LocationFeatureSpecification", name: "Room Service" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917899738550",
    contactType: "reservations",
    email: "bookings@theavahotel.com",
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
  image: `${siteUrl}/estateview.jpeg`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The AVA Hotel",
  alternateName: "The AVA Hotel Chikkamagaluru",
  url: siteUrl,
  description: siteDescription,
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
