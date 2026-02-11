import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  const giftBaskets = [
    {
      id: 1,
      name: "Cupid Gift Basket",
      price: "$15.00",
      image: "/smu0pitch.png",
    },
    {
      id: 2,
      name: "Diwali Gift Basket",
      price: "$30.00",
      image: "/diwali-gift-basket.png",
    },
  ]

  return (
    <section className="relative">
      <div className="relative bg-gradient-to-br from-background via-primary/20 to-muted/30 py-16 sm:py-20 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight px-2">
              SimplyGifted
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-accent font-semibold mb-3 sm:mb-4 tracking-wide px-2">
              Your Thoughts. Our Creations.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Discover the Perfect Gift Baskets for Every Occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {giftBaskets.map((basket) => (
              <div key={basket.id} className="group relative mx-2 sm:mx-0 cursor-pointer">
                <div className="relative overflow-hidden aspect-3/2 rounded-2xl shadow-xl/20 transition-all duration-300 hover:border-accent hover:shadow-lg">
                  <img
                    src={basket.image || "/CupidsBasket2026.pdf"}
                    alt={basket.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href="/pre-made"
                      className="bg-white text-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-lg font-semibold text-foreground">{basket.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 sm:space-y-4 px-4">
            <Link href="/pre-made">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-12 sm:px-16 py-7 sm:py-6 text-lg sm:text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto overflow-hidden group"
              >
                <span className="relative z-10">Find Your Perfect Gift</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
