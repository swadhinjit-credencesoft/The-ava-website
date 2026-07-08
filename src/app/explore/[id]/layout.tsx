import type { Metadata } from "next";
import { exploreArticles } from "@/data/explore";

export async function generateStaticParams() {
  return exploreArticles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = exploreArticles.find((a) => a.id === id);
  if (!article) {
    return { title: "Article Not Found — The AVA" };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function ExploreArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
