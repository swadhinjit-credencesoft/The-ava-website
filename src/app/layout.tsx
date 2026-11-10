import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const siteTitle = "The Mountain Resort Karjat, By Redwings | Mountain Estate & Weddings";
const siteDescription = "A private 7-acre mountain estate in Karjat for destination weddings, celebration weekends, family stays and luxury getaways near Mumbai and Pune.";
const siteUrl = "https://themountainresorts.com";
const heroImage = "https://bookonelocal.in/cdn/DSC08846.avif";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: "%s | The Mountain Resort Karjat" },
  description: siteDescription,
  applicationName: "The Mountain Resort Karjat",
  category: "hotel",
  keywords: [
    "Karjat resort",
    "The Mountain Resort Karjat",
    "Redwings resort",
    "Karjat destination wedding",
    "Karjat mountain resort",
    "Boating in Karjat",
    "Trekking Karjat",
    "Rain dance resort Karjat",
    "Private Jacuzzi Karjat",
    "private estate near Mumbai",
    "Karjat family stay",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: siteTitle, description: siteDescription, url: siteUrl, type: "website", locale: "en_IN", siteName: "The Mountain Resort Karjat", images: [{ url: heroImage, width: 1200, height: 900, alt: "The Mountain Resort Karjat by Redwings" }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: [heroImage] },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1.0, maximumScale: 1.0 };

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": `${siteUrl}/#hotel`,
      name: "The Mountain Resort Karjat",
      alternateName: "The Mountain Resort in Karjat, By Redwings",
      description: siteDescription,
      url: siteUrl,
      telephone: "+919833866655",
      email: "reservation@themountainresorts.com",
      checkinTime: "13:00",
      checkoutTime: "11:00",
      acceptsReservations: true,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      address: { "@type": "PostalAddress", streetAddress: "Survey No. 120, 144 & 145, Wavarle, Vadvihir, Khalapur", addressLocality: "Karjat", addressRegion: "Maharashtra", postalCode: "410201", addressCountry: "IN" },
      areaServed: [
        { "@type": "City", name: "Karjat" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Pune" },
      ],
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Boating" },
        { "@type": "LocationFeatureSpecification", name: "Trekking" },
        { "@type": "LocationFeatureSpecification", name: "Indoor and Outdoor Games" },
        { "@type": "LocationFeatureSpecification", name: "Rain Dance Arena" },
        { "@type": "LocationFeatureSpecification", name: "Outdoor Swimming Pool" },
        { "@type": "LocationFeatureSpecification", name: "Bungalow Private Jacuzzi" },
        { "@type": "LocationFeatureSpecification", name: "Sunset Point View" },
        { "@type": "LocationFeatureSpecification", name: "Lawn Area" },
        { "@type": "LocationFeatureSpecification", name: "Scenic Deck Area" },
        { "@type": "LocationFeatureSpecification", name: "Garden Gazebos" },
        { "@type": "LocationFeatureSpecification", name: "Music Speaker with Mic Setup" },
        { "@type": "LocationFeatureSpecification", name: "In-House Restaurant" },
        { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
        { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      ],
      contactPoint: { "@type": "ContactPoint", telephone: "+919833866655", contactType: "reservations", email: "reservation@themountainresorts.com", availableLanguage: ["English", "Hindi", "Marathi"] },
      image: heroImage,
      logo: `${siteUrl}/logo.png`,
      hasMap: "https://maps.google.com/?q=The+Mountain+Resort+Karjat+Wavarle",
      sameAs: ["https://instagram.com/themountain.karjat"],
      potentialAction: {
        "@type": "ReserveAction",
        target: "https://bookone.io/the-mountain-by-redwings?bookingEngine=true",
        name: "Check availability and reserve a stay",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "The Mountain Resort by Redwings",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
      telephone: "+919833866655",
      email: "reservation@themountainresorts.com",
      address: { "@type": "PostalAddress", streetAddress: "Survey No. 120, 144 & 145, Wavarle, Vadvihir, Khalapur", addressLocality: "Karjat", addressRegion: "Maharashtra", postalCode: "410201", addressCountry: "IN" },
      sameAs: ["https://instagram.com/themountain.karjat"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "The Mountain Resort Karjat",
      alternateName: "The Mountain Resort in Karjat, By Redwings",
      url: siteUrl,
      description: siteDescription,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />
      </head>
      <body suppressHydrationWarning><Providers>{children}</Providers></body>
    </html>
  );
}
