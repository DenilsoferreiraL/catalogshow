"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {

  const whatsappNumber = "5563992922509";
  const whatsappMessage = "Olá, gostaria de saber mais sobre as soluções digitais para concessionárias que vocês oferecem.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

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
        <Link href="#home" className="flex items-center gap-2">
          <Car className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">DriveShow</span>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="#features"
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="#benefits"
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Benefícios
          </Link>
          <Link
            href="#showcase"
            className="text-foreground/90 hover:text-foreground transition-colors"
          >
            Destaques
          </Link>
          <Button asChild variant="default">
            <Link href="#contact">Comece Agora</Link>
          </Button>
        </nav>

      </div>
    </header>
  );
}
