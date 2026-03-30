import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Overview", href: "/overview" },
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border py-3" : "bg-transparent"
        }`}
      >
        <div className="text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
            Nexus AI
        </div>

        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium lowercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 transition-all font-semibold rounded-full px-5 cursor-pointer">
              <a href="/">Try for free</a>
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-foreground focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center animate-fadeIn p-6">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-foreground"
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center gap-8 text-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl text-foreground hover:text-muted-foreground transition font-bold"
              >
                {item.name}
              </a>
            ))}
            <Button
                size="lg"
                className="bg-foreground text-background text-lg hover:bg-foreground/90 mt-10 px-12 py-6 rounded-full transition-all font-bold"
                onClick={() => setIsOpen(false)}
            >
                <a href="/">Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
