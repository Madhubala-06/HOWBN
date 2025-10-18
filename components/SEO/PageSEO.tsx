import Head from "next/head";
import { useRouter } from "next/router";

interface PageSEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export default function PageSEO({
  title,
  description,
  canonicalPath,
  ogImage = "/images/logo.png",
  ogType = "website",
  keywords = [],
}: PageSEOProps) {
  const router = useRouter();
  const defaultTitle = "House of Wellness by N | Wellness, Fitness & Nutrition";
  const defaultDescription =
    "Transform your life with personalized wellness programs, HIIT workouts, yoga classes, and mindful nutrition plans.";
  const siteUrl = "https://houseofwellnessbyn.com";
  
  // For section-based navigation (fragments)
  const isSection = canonicalPath?.startsWith('#');
  
  // Construct canonical URL
  const canonical = isSection 
    ? `${siteUrl}/${canonicalPath}` 
    : canonicalPath 
      ? `${siteUrl}${canonicalPath}` 
      : `${siteUrl}${router.asPath.split("?")[0]}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="House of Wellness by N" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Head>
  );
}
