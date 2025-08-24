"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Kumari Anupriya",
    rating: 5,
    review:
      "Truly loved the hamper I bought recently on Diwali. It has everything included which i needed for instant Diwali preparation.. Great for gifting, highly recommend! Thank you, simply gifted!",
    date: "November 2, 2024",
    avatar: "/default-avatar.png",
  },
  {
    id: 2,
    name: "Maya Creamery",
    rating: 5,
    review:
      "The contents were of good quality. I would definitely use Simply Gifted again for special occasions because it seems very convenient for the gift giver. Good value for the price.",
    date: "November 2024",
    avatar: "/default-avatar.png",
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 sm:h-5 sm:w-5 ${i < rating ? "fill-accent text-accent" : "text-muted"}`} />
    ))
  }

  return (
    <div
      className="relative max-w-4xl mx-auto px-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Card className="overflow-hidden shadow-xl">
        <CardContent className="p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>

            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-3 sm:mb-4">{renderStars(reviews[currentIndex].rating)}</div>
                <blockquote className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-4 sm:mb-6 italic px-2">
                  "{reviews[currentIndex].review}"
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <img
                  src={reviews[currentIndex].avatar || "/placeholder.svg"}
                  alt={reviews[currentIndex].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-accent/20"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">{reviews[currentIndex].name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{reviews[currentIndex].date}</p>
                </div>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/90 hover:bg-background shadow-lg h-8 w-8 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-accent" : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
