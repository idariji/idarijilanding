import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001f3f",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://idarijiconcept.com"),
  title: {
    default: "Idariji Concept — Building Brands. Driving Growth. Delivering Results.",
    template: "%s | Idariji Concept",
  },
  description:
    "Idariji Concept is a full-service creative agency in Lagos and Ibadan, Nigeria. We help businesses build powerful brands through strategic branding, digital marketing, and business development.",
  keywords: [
    "branding agency Nigeria",
    "marketing agency Lagos",
    "brand identity design",
    "digital marketing Nigeria",
    "business development Lagos",
    "graphic design Ibadan",
    "website development Nigeria",
    "Idariji Concept",
  ],
  authors: [{ name: "Idariji Concept" }],
  creator: "Idariji Concept",
  publisher: "Idariji Concept",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://idarijiconcept.com",
    siteName: "Idariji Concept",
    title: "Idariji Concept — Building Brands. Driving Growth. Delivering Results.",
    description: "Full-service creative agency in Lagos and Ibadan, Nigeria.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Idariji Concept" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idariji Concept — Building Brands. Driving Growth.",
    description: "Full-service creative agency in Lagos and Ibadan, Nigeria.",
    images: ["/og-image.png"],
    creator: "@idarijiconcept",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
