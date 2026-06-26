"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-main/80 backdrop-blur-md md:px-18">
      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between px-6 py-4">
        <button onClick={() => setIsOpen(!isOpen)} className="w-8">
          {isOpen ? <X /> : <Menu />}
        </button>

        <span className="text-lg font-bold text-text-primary tracking-tight">
          Abdelrhman Mohamed
        </span>
        <div className="w-8" />
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col items-center gap-6 py-8 bg-card-primary  border-b border-gray-800 overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between px-18 py-6">
        <span className="text-2xl font-bold text-text-primary tracking-tight">
          Abdelrhman Mohamed
        </span>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
