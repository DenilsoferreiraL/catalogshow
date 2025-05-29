"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { CarTaxiFront, AlignRight, X } from "lucide-react";
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
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Fecha menu ao clicar no item
  };

  return (
    <>
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
            aria-label="Ir para home"
          >
            <CarTaxiFront className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold select-none ">CatalogShow</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-gray-800">
            <button
              onClick={() => handleScrollTo("showcase")}
              className="hover:text-primary transition-colors duration-200 focus:outline-none"
            >
              Destaques
            </button>

            <button
              onClick={() => handleScrollTo("benefits")}
              className="hover:text-primary transition-colors duration-200 focus:outline-none"
            >
              Benefícios
            </button>
            <button
              onClick={() => handleScrollTo("features")}
              className="hover:text-primary transition-colors duration-200 focus:outline-none"
            >
              Recursos
            </button>
            <Button asChild variant="default">
              <button
                onClick={() => handleScrollTo("contact")}
                className="focus:outline-none text-base"
              >
                Comece Agora
              </button>
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 text-gray-950" />
            ) : (
              <AlignRight className="w-6 h-6 text-gray-950" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-16 right-0 h-full shadow-lg z-50 p-6 flex flex-col space-y-6 md:hidden transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            "bg-background/90" // Cor sólida para evitar transparência
          )}
          style={{ width: "100%", height: "auto" }}
        >

          <button
            onClick={() => handleScrollTo("showcase")}
            className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            Destaques
          </button>
          <button
            onClick={() => handleScrollTo("benefits")}
            className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            Benefícios
          </button>
          <button
            onClick={() => handleScrollTo("features")}
            className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
          >
            Recursos
          </button>
          <Button asChild variant="default" className="mt-2 font-semibold ">
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full focus:outline-none text-base"
            >
              Comece Agora
            </button>
          </Button>
        </div>
      </header>

      {/* Overlay escuro atrás do menu mobile aberto */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 md:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
}
