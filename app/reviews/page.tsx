import { ReviewsCarousel } from "@/components/reviews-carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function ReviewsPage() {
  const stats = [
    { label: "Happy Customers", value: "100+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Gift Baskets Delivered", value: "200+" },
    { label: "Years of Excellence", value: "1+" },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Customer Reviews</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what our customers are saying about their Simply Gifted experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mb-16">
          <ReviewsCarousel />
        </div>
        <div className="text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-2 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Share Your Experience</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We'd love to hear about your Simply Gifted experience. Your feedback helps us continue to create
                exceptional gift-giving moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors">
                  Leave a Review
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
