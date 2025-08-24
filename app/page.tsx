import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
    </div>
  )
}
