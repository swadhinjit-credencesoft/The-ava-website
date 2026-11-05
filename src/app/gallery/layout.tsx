import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resort Gallery | The Mountain Resort Karjat",
  description: "Browse resort, room and estate photos from The Mountain Resort by Redwings in Karjat.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
