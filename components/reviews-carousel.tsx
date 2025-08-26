"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
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
  {
    id: 3,
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

  const getVisibleReviews = () => {
    const cards = []
    const totalCards = reviews.length

    for (let i = 0; i < totalCards; i++) {
      const position = (i - currentIndex + totalCards) % totalCards
      cards.push({
        ...reviews[i],
        position,
        index: i,
      })
    }

    return cards
  }

  return (
    <div
      className="relative max-w-6xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-96 flex items-center justify-center" style={{ perspective: "1000px" }}>
        {getVisibleReviews().map((review) => {
          const { position, index } = review

          let transform = ""
          let zIndex = 0
          let opacity = 0.4
          let scale = 0.8

          if (position === 0) {
            // Center card
            transform = "translateX(0) translateZ(0) rotateY(0deg)"
            zIndex = 10
            opacity = 1
            scale = 1
          } else if (position === 1 || position === reviews.length - 1) {
            // Adjacent cards
            const isRight = position === 1
            transform = `translateX(${isRight ? "300px" : "-300px"}) translateZ(-200px) rotateY(${isRight ? "-20deg" : "20deg"})`
            zIndex = 5
            opacity = 0.6
            scale = 0.85
          } else {
            // Hidden cards
            const isRight = position < reviews.length / 2
            transform = `translateX(${isRight ? "450px" : "-450px"}) translateZ(-400px) rotateY(${isRight ? "-40deg" : "40deg"})`
            zIndex = 1
            opacity = 0.2
            scale = 0.7
          }

          return (
            <div
              key={index}
              className="absolute w-96 h-80 transition-all duration-700 ease-in-out cursor-pointer"
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: "preserve-3d",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div
                className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 hover:border-accent transition-all duration-300 p-6 flex flex-col justify-center"
                style={{ transform: `scale(${scale})` }}
              >
                <div className="text-center mb-4">
                  <div className="flex justify-center mb-3">{renderStars(review.rating)}</div>
                  <blockquote className="text-sm md:text-base text-foreground leading-relaxed italic px-2 line-clamp-4">
                    "{review.review}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center space-x-3 mt-auto">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl h-12 w-12 border-0 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-foreground" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 z-20 bg-white/95 backdrop-blur-sm hover:bg-white shadow-xl h-12 w-12 border-0 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
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
