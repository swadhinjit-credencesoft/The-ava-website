import type { Metadata } from "next";
import { exploreArticles } from "@/data/explore";

const siteUrl = "https://themountainresorts.com";

export async function generateStaticParams() {
  return exploreArticles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = exploreArticles.find((a) => a.id === id);
  if (!article) {
    return { title: "Article Not Found — The Mountain Resort" };
  }
  const path = `/explore/${id}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}${path}`,
      type: "article",
      siteName: "The Mountain Resort",
      images: [{ url: article.image, width: 1200, height: 900, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ExploreArticleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = exploreArticles.find((a) => a.id === id);
  const articleUrl = article ? `${siteUrl}/explore/${article.id}` : "";

  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        image: article.image,
        url: articleUrl,
        inLanguage: "en-IN",
        about: "Karjat travel",
        articleSection: article.category,
        keywords: [article.category, "Karjat", "The Mountain Resort"],
        author: { "@type": "Organization", name: "The Mountain Resort Karjat", url: siteUrl },
        publisher: {
          "@type": "Organization",
          name: "The Mountain Resort Karjat",
          logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
        },
        isPartOf: { "@type": "WebSite", name: "The Mountain Resort", url: siteUrl },
      }
    : null;

  const breadcrumbSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Explore", item: `${siteUrl}/explore` },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      }
    : null;

  return (
    <>
      {children}
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
    </>
  );
}
