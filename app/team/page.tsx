import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Shreya Talwar",
      bio: "Hi! I'm Shreya Talwar, an entrepreneur passionate about creating unique solutions through business. As a junior at Emerson High School, I'm involved in DECA competitions and yearbook, constantly sharpening my skills. Outside of school, I'm a 4th-degree black belt and national competitor, as well as an instructor at Tiger Rock Martial Arts. Simply Gifted is my second business venture, following the success of my first, So Sweet Dessert Emporium, which raised funds for causes like the Rainforest Trust. With certifications in digital marketing and e-commerce, I'm excited to continue growing and bringing innovative ideas to life!",
      image: "/shreya.png",
    },
    {
      id: 2,
      name: "Nihit Sapre",
      bio: "Hi everyone! My name is Nihit. I am a junior at Emerson High School. I enjoy playing tennis, and I am a part of my school's varsity team. I also compete in USTA and UTR tournaments outside of school. I am also involved in my schools DECA. I have been a member for 2 years now, and I have competed and won at the district level. I also achieved state finalist in my sophmore year. I run another business outside of school called ClassCloud where we provide a large educational platform for high school students. My team and I are excited to help you find the perfect gift for those you love!",
      image: "/nihit.png",
    },
    {
      id: 3,
      name: "Dhanurvedh Chavva",
      bio: "Hi! Im Dhanurvedh Chavva. I am a dedicated high school student at Emerson Highschool in Mckinney, Texas, passionate about leadership, technology, and entrepreneurship. As the Salutatorian of my class, I maintain a consistent 4.0 with over 20+ AP credits. I have excelled in national competitions, including placing top 20 in BPA Nationals and top 32 in Celebrating Highschool Innovators Nationals. I am also a co-founder of two businesses, SimplyGifted and Class Cloud, where I manage the financial and technological aspects of the business. I’m passionate about serving the community, and I’m involving myself in several volunteer activities. ",
      image: "/dhanurvedh.png",
    },
    {
      id: 4,
      name: "Malishka Patnaik",
      bio: "Hi yall! My name is Malishka Patnaik and I am an aspiring future business entrepreneur. I love traveling, dogs, and spending time with family and friends. I play tennis and I also have a lot of involvement in teaching tennis to kids with autism. Due to my involvement with tennis and our community, I have been able to develop important leadership skills as well as critical communication skills that are needed to run a successful business alongside my partners!",
      image: "/malishka.png",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Meet the Team</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet with the passionate executive team of Simply Gifted below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
                >
                  <div className="lg:w-2/5">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-80 lg:h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <div className="max-w-2xl">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{member.name}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-8">{member.bio}</p>

                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </div>
  )
}
