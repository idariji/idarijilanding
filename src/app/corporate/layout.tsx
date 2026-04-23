import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Communications Nigeria | Idariji Concept",
  description: "Capability statements, annual reports, corporate websites, and executive communications for Nigerian corporates and indigenous operators. Launching Q1 2027.",
  robots: { index: true, follow: true },
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
