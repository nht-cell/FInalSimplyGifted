import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4 mt-20">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary-foreground">SimplyGifted</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">Your Thoughts. Our Creations.</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-secondary-foreground">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/pre-made" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Pre-Made Baskets
                  </a>
                </li>
                <li>
                  <a href="/customize" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Customize
                  </a>
                </li>
                <li>
                  <a href="/reviews" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-secondary-foreground">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/team" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-secondary-foreground/80 hover:text-accent transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-secondary-foreground">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="text-secondary-foreground/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-secondary-foreground/80">hello@simplygifted.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-secondary-foreground/60 text-sm">© 2024 SimplyGifted. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
