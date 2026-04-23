import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Food Brand & Packaging Design Nigeria | Idariji Concept",
  description: "Brand identity, packaging design, and delivery-app optimisation for Nigerian food, beverage, and snack brands. NAFDAC-compliant, print-ready files.",
  openGraph: {
    title: "Food Brand & Packaging Design Nigeria | Idariji Concept",
    description: "Brand identity, packaging design, and delivery-app optimisation for Nigerian food, beverage, and snack brands.",
    url: "https://idarijiconcept.ng/food-brands",
  },
}

export default function FoodBrandsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
