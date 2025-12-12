import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/product-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Gift, Users } from "lucide-react"

export default function PreMadePage() {
  const features = [
    {
      icon: Heart,
      title: "Thoughtfully Curated",
      description: "Every basket is curated to create lasting memories",
    },
    {
      icon: Gift,
      title: "Premium Quality",
      description: "Only the finest products are used in our gift baskets",
    },
    {
      icon: Star,
      title: "Memorable Experiences",
      description: "Cherish moments with your loved ones with our gift baskets",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Each basket is crafted with personal attention to detail",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Pre-Made Gift Baskets</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose from our carefully curated selection of premium gift baskets, ready to delight your loved ones. Each
            basket is thoughtfully designed for specific occasions and preferences.
          </p>
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-16 py-7 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
          >
            import Link from 'next/link';

<Link href="/https://buy.stripe.com/7sY8wP8gWh1h4b07dv7Vm08">
  <Button
    size="lg"
    className="relative bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-16 py-7 text-xl"
  >
    <span className="relative z-10">Order Pre-Made Basket</span>
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
  </Button>
</Link>
        
        <div className="mb-20">
          <ProductCarousel />
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Our Pre-Made Baskets?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
