"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CarTaxiFront, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);  // fecha o menu após clicar
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/90 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => handleScrollTo("home")}
          className="flex items-center gap-2"
        >
          <CarTaxiFront className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">CatalogShow</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleScrollTo("features")}>Recursos</button>
          <button onClick={() => handleScrollTo("benefits")}>Benefícios</button>
          <button onClick={() => handleScrollTo("showcase")}>Destaques</button>
          <Button asChild variant="default">
            <button onClick={() => handleScrollTo("contact")}>Comece Agora</button>
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 right-0 w-3/4 h-full bg-background shadow-lg z-50 p-6 flex flex-col space-y-4 md:hidden">
          <button onClick={() => handleScrollTo("features")}>Recursos</button>
          <button onClick={() => handleScrollTo("benefits")}>Benefícios</button>
          <button onClick={() => handleScrollTo("showcase")}>Destaques</button>
          <Button asChild variant="default">
            <button onClick={() => handleScrollTo("contact")}>Comece Agora</button>
          </Button>
        </div>
      )}
    </header>
  );
}
