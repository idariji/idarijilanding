import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hotel Branding & Marketing Nigeria | Idariji Concept",
  description: "Brand strategy, direct-booking websites, and marketing engines for Nigerian boutique hotels, serviced apartments, and event centres. Fix your OTA commission drain.",
  openGraph: {
    title: "Hotel Branding & Marketing Nigeria | Idariji Concept",
    description: "Brand strategy, direct-booking websites, and marketing engines for Nigerian boutique hotels, serviced apartments, and event centres.",
    url: "https://idarijiconcept.ng/hotels",
  },
}

export default function HotelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
