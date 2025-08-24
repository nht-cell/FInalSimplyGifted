import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Ordering & Satisfaction",
      faqs: [
        {
          question: "What if you want your product refund?",
          answer:
            "We want you to be completely satisfied with your purchase. If you receive a broken item, refunds are permitted, but we do require proof of the damage. Please take clear photos and contact our team within 3 days of receiving your order. We appreciate your understanding and are here to help! NOTE: We do not give refunds for non-broken gift baskets.",
        },
        {
          question: "What should I do if I receive the wrong item?",
          answer:
            "If you receive the wrong item, please contact our customer support team within 3 days of delivery. Include your order number and a description of the incorrect item. We’ll work quickly to resolve the issue and send you the correct item!",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "What is your shipping policy?",
          answer:
            "Our shipping policy is designed to ensure a seamless experience for our customers. Gift baskets can be picked up at no charge at our location. For those within 5 miles, we’re pleased to offer free shipping. If you reside outside this radius, a shipping fee of $7 will apply. We aim to make your gift-giving experience as convenient and affordable as possible!",
        },
        {
          question: "How long will it take to receive my order?",
          answer:
            "Exciting news! Our baskets are now shipping within just 3-4 business days. Get yours soon!",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our gift baskets, ordering process, shipping, and more. Can't find
            what you're looking for? We're here to help!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border-2 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">Still Have Questions?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our customer service team is here to help! Contact us at our email below:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground text-sm">support@simplygifted.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
