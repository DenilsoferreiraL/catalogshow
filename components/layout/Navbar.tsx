"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CarTaxiFront } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
      isScrolled
        ? "bg-background/90 shadow-sm"
        : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => {
            const section = document.getElementById('home');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2">
          <CarTaxiFront
            className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">CatalogShow</span>
        </button>
        <nav className="hidden md:flex space-x-6 items-center">
          <button
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Recursos
          </button>

          <button
            onClick={() => {
              document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Benefícios
          </button>

          <button
            onClick={() => {
              document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Destaques
          </button>

          <Button asChild variant="default">
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Comece Agora
            </button>
          </Button>
        </nav>

      </div>
    </header>
  );
}
