import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Startup Branding & Growth Nigeria | Idariji Concept",
  description: "Brand strategy, website rebuilds, and fractional growth teams for seed to Series A Nigerian startups. Launch Q4 2026.",
  robots: { index: true, follow: true },
}

export default function StartupsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
