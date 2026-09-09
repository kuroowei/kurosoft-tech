// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display leading-tight text-text">
          <span className="block text-lg font-semibold tracking-tight">
            KUROSOFT
          </span>
          <span className="block text-xs tracking-[0.2em] text-amber">
            TECH
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            return (
              <a key={link.href} href={link.href} className="text-sm text-muted transition-colors hover:text-text">
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className="rounded-md bg-amber px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90">
            Work With Us
          </a>
        </div>

        <button type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-label={isOpen ? "Close menu" : "Open menu"} className="text-text md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 ease-in-out md:hidden ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            return (
              <a key={link.href} href={link.href} onClick={handleLinkClick} className="rounded-md px-2 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-text">
                {link.label}
              </a>
            );
          })}
          <a href="#contact" onClick={handleLinkClick} className="mt-2 rounded-md bg-amber px-4 py-3 text-center text-sm font-medium text-ink">
            Work With Us
          </a>
        </div>
      </div>
    </header>
  );
}