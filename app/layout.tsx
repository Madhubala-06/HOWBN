import type { Metadata } from "next";
import { Playfair_Display, Roboto, Figtree, Unbounded } from "next/font/google";
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


export const metadata: Metadata = {
  title: "House of Wellness by N",
  description: "Transform your life with wellness, HIIT, yoga, and mindful nutrition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${playfairDisplay.variable} ${roboto.variable} ${figtree.variable} ${unbounded.variable} font-inter-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
