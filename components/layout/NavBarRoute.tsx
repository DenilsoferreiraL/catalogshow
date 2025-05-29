"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CarTaxiFront, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NavbarRoute() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/90 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => {
            const section = document.getElementById("home");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <CarTaxiFront className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">CatalogShow</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {pathname !== "/termos" && (
            <a href="/termos">
              <button>Termos de Uso</button>
            </a>
          )}
          {pathname !== "/privacidade" && (
            <a href="/privacidade">
              <button>Política de Privacidade</button>
            </a>
          )}
          <Button asChild variant="default">
            <a href="https://catalogshow.vercel.app/">Início</a>
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
          {pathname !== "/termos" && (
            <a href="/termos" onClick={() => setIsMenuOpen(false)}>
              <button>Termos de Uso</button>
            </a>
          )}
          {pathname !== "/privacidade" && (
            <a href="/privacidade" onClick={() => setIsMenuOpen(false)}>
              <button>Política de Privacidade</button>
            </a>
          )}
          <Button asChild variant="default">
            <a
              href="https://catalogshow.vercel.app/"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
