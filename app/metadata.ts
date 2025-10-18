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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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

// About page metadata
export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About | House of Wellness by N",
  description: "Meet N, founder of House of Wellness by N. Learn about her transformative journey from an obese teen to a certified wellness coach dedicated to helping others achieve their health goals.",
  keywords: [...baseMetadata.keywords, "wellness coach", "transformation story", "weight loss journey", "health coach"],
  openGraph: {
    title: "About House of Wellness by N",
    description: "Meet the founder and learn about our holistic approach to health and wellness.",
    url: "https://houseofwellnessbyn.com/about",
    siteName: "House of Wellness by N",
    images: [
      {
        url: "/images/N.jpeg",
        width: 1200,
        height: 630,
        alt: "About House of Wellness by N"
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

// Programs page metadata
export const programsMetadata: Metadata = {
  ...baseMetadata,
  title: "Wellness Programs | House of Wellness by N",
  description: "Discover our specialized wellness programs including HIIT workouts, yoga sessions, personalized nutrition plans, and one-on-one coaching designed to transform your health and fitness.",
  keywords: [...baseMetadata.keywords, "wellness programs", "fitness classes", "nutrition plans", "health coaching", "online fitness"],
  openGraph: {
    title: "Wellness Programs | House of Wellness by N",
    description: "Explore our specialized fitness, nutrition, and wellness programs tailored to your unique goals.",
    url: "https://houseofwellnessbyn.com/programs",
    siteName: "House of Wellness by N",
    images: [
      {
        url: "/Hero_Section/five.jpg",
        width: 1200,
        height: 630,
        alt: "Wellness Programs"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

// Contact page metadata
export const contactMetadata: Metadata = {
  ...baseMetadata,
  title: "Contact Us | House of Wellness by N",
  description: "Ready to start your wellness journey? Contact House of Wellness by N for personalized programs, consultations, and coaching sessions tailored to your health and fitness goals.",
  keywords: [...baseMetadata.keywords, "wellness consultation", "fitness consultation", "health coaching appointment", "contact wellness coach"],
  openGraph: {
    title: "Contact Us | House of Wellness by N",
    description: "Get in touch to start your personalized wellness journey today.",
    url: "https://houseofwellnessbyn.com/contact",
    siteName: "House of Wellness by N",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact House of Wellness by N"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};
