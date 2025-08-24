"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pre-made", label: "Pre-Made" },
    { href: "/customize", label: "Customize" },
  ]

  const moreNavItems = [
    { href: "/team", label: "Meet the Team" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Business Name */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {/* Logo placeholder */}
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SG</span>
              </div>
              <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
                SimplyGifted
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}

            {/* More dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {moreNavItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">More</p>
                    {moreNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-lg font-medium text-foreground hover:text-accent transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
