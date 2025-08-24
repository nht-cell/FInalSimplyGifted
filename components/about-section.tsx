import { Card, CardContent } from "@/components/ui/card"
import { Heart, Gift, Star, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Thoughtfully Curated",
      description: "Every item is carefully selected for quality and meaning",
    },
    {
      icon: Gift,
      title: "Premium Quality",
      description: "Only the finest products make it into our gift baskets",
    },
    {
      icon: Star,
      title: "Memorable Experiences",
      description: "Creating moments that last a lifetime",
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Each basket is crafted with personal attention to detail",
    },
  ]

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About SimplyGifted</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/90 backdrop-blur-md border-black border-2 shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <p className="text-xl text-foreground leading-relaxed mb-3">
                    <span className="font-bold text-accent">Our Mission:</span> At SimplyGifted Shop, we strive to bring joy to every occasion with our carefully curated selection of unique gifts. Our mission is to
                    provide high-quality products that make gift-giving a delightful experience for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-white/90 backdrop-blur-md border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
