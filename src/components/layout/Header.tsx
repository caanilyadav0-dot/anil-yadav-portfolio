import { Calculator, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Documents", href: "#documents" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg text-primary">CA Anil</div>
            <div className="text-xs text-neutral-500 font-medium tracking-wide">
              Business Finance Expert
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-neutral-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-neutral-100 p-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-neutral-600 py-2 border-b border-neutral-50 active:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-2">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
