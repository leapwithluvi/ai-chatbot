import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Overview", href: "/overview" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar Utama */}
      <nav className="fixed w-full top-0 z-40 bg-gray-950 bg-opacity-80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">LeapAI</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-300 transition font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button className="bg-white text-black hover:bg-gray-200 transition">
            <a href="/">Try LeapAI</a>
          </Button>
        </div>

        {/* Hamburger Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-950 bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center overflow-y-auto
                     transition-opacity duration-300 ease-in-out animate-fadeIn"
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl py-4 hover:text-gray-300 transition font-semibold"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className="bg-white text-black text-lg hover:bg-gray-200 mt-10 px-10 py-3 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            <a href="/">Try LeapAI</a>
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
