import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "The AVA",
  description: "The AVA — built on Replit. Update this description to reflect the app.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "The AVA",
    description: "The AVA — built on Replit. Update this description to reflect the app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The AVA",
    description: "The AVA — built on Replit. Update this description to reflect the app.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
