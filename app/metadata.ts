import { Metadata } from "next";

// Base metadata configuration
const baseMetadata = {
  title: {
    template: "%s | House of Wellness by N",
    default: "House of Wellness by N | Wellness, Fitness & Nutrition"
  },
  description: "Transform your life with personalized wellness programs, HIIT workouts, yoga classes, and mindful nutrition plans. Join House of Wellness by N for holistic health and fitness.",
  keywords: ["wellness", "fitness", "nutrition", "yoga", "HIIT", "health coaching", "personal training"],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-image-preview:large, max-snippet:-1",
  },
  icons: {
    icon: '/images/logo.png',
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  }
};

// Home page metadata
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: "House of Wellness by N | Transform Your Life",
  description: "Transform your life with premium wellness programs tailored to your goals. Discover HIIT workouts, yoga classes, nutrition plans, and holistic health coaching for sustainable results.",
  openGraph: {
    title: "House of Wellness by N | Transform Your Life Through Wellness",
    description: "Experience personalized wellness programs, HIIT workouts, nutrition coaching, and holistic health transformation.",
    url: "https://houseofwellnessbyn.com",
    siteName: "House of Wellness by N",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "House of Wellness by N"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

// Blog page metadata
export const blogMetadata: Metadata = {
  ...baseMetadata,
  title: "Wellness Blog | House of Wellness by N",
  description: "Explore our wellness blog for expert insights on nutrition, fitness, mental health, and holistic wellbeing. Practical tips and transformative stories to inspire your wellness journey.",
  keywords: [...baseMetadata.keywords, "wellness blog", "health tips", "nutrition advice", "fitness blog", "wellness articles"],
  openGraph: {
    title: "Wellness Blog | House of Wellness by N",
    description: "Expert insights, practical tips and inspiring stories to support your wellness journey.",
    url: "https://houseofwellnessbyn.com/blog",
    siteName: "House of Wellness by N",
    images: [
      {
        url: "/blog/owner.png",
        width: 1200,
        height: 630,
        alt: "House of Wellness Blog"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};
