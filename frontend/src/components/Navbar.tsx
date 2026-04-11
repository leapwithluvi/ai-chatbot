"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Intelligence", href: "/overview" },
    { name: "Infrastructure", href: "/overview#features" },
    { name: "Economics", href: "/overview#pricing" },
    { name: "Contact", href: "/overview#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-background border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="mono-container flex items-center justify-between">
        <Link href="/">
          <Logo size={28} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-10">
          <Link
            href="/overview"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Intelligence
          </Link>
          <Link
            href="/overview#features"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Features
          </Link>
          <Link
            href="/overview#how-it-works"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Procedure
          </Link>
          <Link
            href="/overview#pricing"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-emerald-500 transition-colors"
          >
            Docs_Core
          </Link>
          <Link
            href="/overview#contact"
            className="text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Liaison
          </Link>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/"
            className="hidden md:block px-5 py-2 bg-foreground text-background text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-[2px] active:shadow-none"
          >
            Execute_Terminal
          </Link>
          <ModeToggle />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-8 animate-slideDown md:hidden">
          <div className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black uppercase tracking-widest hover:italic transition-all"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-border">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-xs font-black uppercase tracking-[0.4em] bg-foreground text-background p-4 block text-center"
              >
                Access System
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
