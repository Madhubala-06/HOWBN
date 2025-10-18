import type { Metadata } from "next";
import { Playfair_Display, Roboto, Figtree, Unbounded, Berkshire_Swash } from "next/font/google";
import "./globals.css";
import "../styles/blog.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const berkshireSwash = Berkshire_Swash({
  variable: "--font-berkshire",
  weight: ["400"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "House of Wellness by N | Wellness, Fitness & Nutrition",
  description: "Transform your life with personalized wellness programs, HIIT workouts, yoga classes, and mindful nutrition plans. Join House of Wellness by N to achieve sustainable health and fitness goals.",
  keywords: ["wellness", "fitness", "nutrition", "yoga", "HIIT", "health coaching", "personal training", "mindfulness"],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://houseofwellnessbyn.com",
    siteName: "House of Wellness by N",
    title: "House of Wellness by N | Transform Your Life",
    description: "Premium wellness, fitness, and nutrition programs customized to your needs and goals.",
    images: [
      {
        url: "https://houseofwellnessbyn.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: "House of Wellness by N",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Wellness by N | Wellness, Fitness & Nutrition",
    description: "Transform your life with personalized wellness programs, HIIT workouts, yoga classes, and mindful nutrition plans.",
    images: ["https://houseofwellnessbyn.com/images/logo.png"],
  },
  alternates: {
    canonical: "https://houseofwellnessbyn.com",
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code when you have it
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "House of Wellness by N",
              "url": "https://houseofwellnessbyn.com",
              "description": "Transform your life with personalized wellness programs, HIIT workouts, yoga classes, and mindful nutrition plans.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://houseofwellnessbyn.com/blog?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "N",
              "url": "https://houseofwellnessbyn.com/#about",
              "image": "https://houseofwellnessbyn.com/images/N-2.jpeg",
              "description": "Wellness Coach and certified yoga teacher with expertise in Nutrition Essentials from the American Society for Nutrition (ASN).",
              "jobTitle": "Wellness Coach",
              "sameAs": [
                "https://www.instagram.com/houseofwellnessbyn/", // Replace with actual social profiles
                "https://www.facebook.com/houseofwellnessbyn/"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "House of Wellness by N",
                "url": "https://houseofwellnessbyn.com"
              },
              "knowsAbout": ["fitness", "wellness", "yoga", "nutrition", "HIIT", "healthy lifestyle"]
            })
          }}
        />
      </head>
      <body
        className={` ${playfairDisplay.variable} ${roboto.variable} ${figtree.variable} ${unbounded.variable} ${berkshireSwash.variable} font-inter-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
