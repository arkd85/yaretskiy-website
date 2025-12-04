import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHome
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={cn(
            "text-xl font-semibold tracking-tight transition-colors",
            isScrolled || !isHome ? "text-foreground" : "text-white"
          )}
        >
          Arkadiy Yaretskiy MD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:opacity-70",
                isScrolled || !isHome ? "text-foreground" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant={isScrolled || !isHome ? "default" : "glass"}
            size="sm"
            onClick={() => window.open('https://headway.co', '_blank')}
          >
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("h-6 w-6", isScrolled || !isHome ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn("h-6 w-6", isScrolled || !isHome ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-6 flex flex-col space-y-4 animate-accordion-down shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-foreground font-medium text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full" onClick={() => window.open('https://headway.co', '_blank')}>
            Book Consultation
          </Button>
        </div>
      )}
    </header>
  );
}