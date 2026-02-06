import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Qi Gong", path: "/qigong" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/trees-logo.png"
            alt="Trees Acupuncture Logo"
            className="h-12 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://picsum.photos/id/10/100/100";
            }}
          />
          <span className="text-xl md:text-2xl font-arapey tracking-wider uppercase">
            Trees Acupuncture
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg transition-colors hover:opacity-70 ${
                isActive(link.path) ? "border-b border-brand-text" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-bg border-t border-brand-text/10 fade-in">
          <nav className="flex flex-col p-6 gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl ${isActive(link.path) ? "font-bold" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
