"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
      id: 1,
      name: "Cupid Gift Basket",
      price: "$39.99",
      image: "/cupid-gift-basket.png",
      description: "This Valentine’s, make someone’s day unforgettable with a personalized Cupid’s Basket! Perfect for your girlfriend, best friend, or secret crush, these baskets are crafted with love and designed just for you.",
    },
    {
      id: 2,
      name: "Winter Wish Basket",
      price: "$39.99",
      image: "/winter-wish-basket.png",
      description: "Our Self-Care Basket is designed to bring comfort, relaxation, and a touch of indulgence to your day. Filled with cozy essentials like a scented candle, soothing tea, soft socks, and sweet treats, it’s perfect for unwinding after a long week. Thoughtfully curated, it’s a reminder to slow down, breathe, and treat yourself",
    },
    {
      id: 3,
      name: "Holiday Gift Basket",
      price: "$39.99",
      image: "/holiday-gift-basket.png",
      description: "Get ready to spread some holiday cheer with Simply Gifted’s exclusive Christmas basket line! 🎄✨ Perfect for friends, family, or corporate gifts, our baskets are filled with handpicked, festive goodies that bring warmth and joy to any celebration.",
    },
]

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 4000) // Auto-advance every 4 seconds

      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused])

  return (
    <div
      className="relative max-w-4xl mx-auto px-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Card className="overflow-hidden bg-white/90 backdrop-blur-md border-2 shadow-2xl hover:shadow-3xl transition-all duration-500">
        <CardContent className="p-0">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 z-10 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl h-12 w-12 border-0 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </Button>

            <div className="w-full">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img
                    src={products[currentIndex].image || "/placeholder.svg"}
                    alt={products[currentIndex].name}
                    className="w-full h-56 sm:h-64 md:h-96 object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10"></div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white/95 backdrop-blur-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                    {products[currentIndex].description}
                  </p>
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-fit">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 z-10 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl h-12 w-12 border-0 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-6 space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-accent shadow-lg scale-125"
                : "bg-muted hover:bg-muted-foreground/50 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
