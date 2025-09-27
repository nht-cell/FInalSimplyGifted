import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const storyChapters = [
    {
      id: 1,
      title: "Our Story",
      year: "2024",
      content:
        "Simply Gifted is a student-run business dedicated to providing personalized gifts for everyone. At Simply Gifted, our mission is to create an inclusive gifting experience that celebrates every individual and occasion. We believe that everyone deserves to feel special, which is why we offer a diverse range of customizable and pre-made gift baskets designed to cater to various tastes and preferences. Whether it’s a widely celebrated holiday or a niche event, our goal is to ensure that every basket reflects the uniqueness of the recipient.",
      image: "/our-story.png",
    },
    {
      id: 2,
      title: "Causes",
      year: "2024",
      content:
        " In celebration of Diwali, we are thrilled to announce that Simply Gifted has dedicated 10% of our total profits to support the Karya Siddhi Hanuman Temple. This festival of lights is a time of giving and gratitude, and we’re honored to contribute to a cause that means so much to our community. In the coming weeks, our team will personally visit the temple to make this donation and show our appreciation. Thank you for helping us make this meaningful gesture possible—your support lights the way for us to give back.",
      image: "/causes.png",
    },
    {
      id: 3,
      title: "Check out our team compete at the SMU Business Showcase",
      year: "2024",
      content:
        "During October, our executive team had the chance to pitch Simply Gifted at the SMU Business showcase alongside various different businesses. We are proud to announce that Simply Gifted was one of the highest voted teams at the showcase. Our team has worked very hard, and we are honored to have been given the opportunity to compete against so many great businesses. We thank SMU for hosting this event and for allowing us to showcase Simply Gifted to everyone!",
      image:
        "/smu-pitch.png",
    },
    {
      id: 4,
      title: "Simply Gifted Wins at Illinois Wesleyan Innovators Pitch Competition!",
      year: "2024",
      content:
        "In May, our executive team represented Simply Gifted at the Illinois Wesleyan Innovators Pitch Competition, ranking 10th nationally. We thank Illinois Wesleyan for hosting this event and for allowing us to showcase Simply Gifted",
      image:
        "/chapter-4.png",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the journey behind SimplyGifted and how we became your trusted partner in thoughtful gift-giving.
            From humble beginnings to a thriving business, our story is one of passion, dedication, and the belief that
            every gift should be extraordinary.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {storyChapters.map((chapter, index) => (
            <div key={chapter.id} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-10">
              </div>

              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2">
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
                  >
                    <div className="lg:w-1/2">
                      <img
                        src={chapter.image || "/placeholder.svg"}
                        alt={`${chapter.title} - ${chapter.year}`}
                        className="w-full h-64 lg:h-96 object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12">
                      <div className="max-w-lg">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{chapter.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">{chapter.content}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
