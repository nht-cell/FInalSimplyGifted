import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Sparkles, Heart, Gift } from "lucide-react"

export default function CustomizePage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Customize Your Gift
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Create a personalized gift basket tailored to your recipient's preferences. Let us craft something truly
            special together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg">
                      <Gift className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Custom Gift Baskets
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  If you want different gift baskets from our pre-made options, customize your own gift basket with the link below. Fast shipping and premium items are guaranteed.
                </p>
              </div>

              <a href="/custom-gift-basket" className="block w-fit">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-12 sm:px-16 py-7 sm:py-7 text-lg sm:text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
               >
                  <span className="relative z-10">Order Custom Gift Basket</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </a>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}
