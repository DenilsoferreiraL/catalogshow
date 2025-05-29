// "use client";

// import * as React from "react";
// import { usePathname } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { CarTaxiFront, Menu, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function NavbarRoute() {
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={cn(
//         "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
//         isScrolled ? "bg-background/90 shadow-sm" : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
//         <button
//           onClick={() => {
//             const section = document.getElementById("home");
//             section?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="flex items-center gap-2"
//         >
//           <CarTaxiFront className="h-8 w-8 text-primary" />
//           <span className="text-xl font-bold">CatalogShow</span>
//         </button>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex space-x-6 items-center">
//           {pathname !== "/termos" && (
//             <a href="/termos">
//               <button>Termos de Uso</button>
//             </a>
//           )}
//           {pathname !== "/privacidade" && (
//             <a href="/privacidade">
//               <button>Política de Privacidade</button>
//             </a>
//           )}
//           <Button asChild variant="default">
//             <a href="https://catalogshow.vercel.app/">Início</a>
//           </Button>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed top-16 right-0 w-3/4 h-full bg-background shadow-lg z-50 p-6 flex flex-col space-y-4 md:hidden">
//           {pathname !== "/termos" && (
//             <a href="/termos" onClick={() => setIsMenuOpen(false)}>
//               <button>Termos de Uso</button>
//             </a>
//           )}
//           {pathname !== "/privacidade" && (
//             <a href="/privacidade" onClick={() => setIsMenuOpen(false)}>
//               <button>Política de Privacidade</button>
//             </a>
//           )}
//           <Button asChild variant="default">
//             <a
//               href="https://catalogshow.vercel.app/"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Início
//             </a>
//           </Button>
//         </div>
//       )}
//     </header>
//   );
// }


"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CarTaxiFront, AlignRight, X } from "lucide-react";
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

  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
          isScrolled ? "bg-background/90 shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2" aria-label="Ir para home">
            <CarTaxiFront className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold select-none">CatalogShow</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center font-medium text-gray-800">
            {pathname !== "/termos" && (
              <a
                href="/termos"
                className="hover:text-primary transition-colors duration-200 focus:outline-none"
              >
                Termos de Uso
              </a>
            )}
            {pathname !== "/privacidade" && (
              <a
                href="/privacidade"
                className="hover:text-primary transition-colors duration-200 focus:outline-none"
              >
                Política de Privacidade
              </a>
            )}
            <Button asChild variant="default">
              <a
                href="https://catalogshow.vercel.app/"
                className="focus:outline-none"
              >
                Início
              </a>
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
            "fixed top-16 right-0 items-center shadow-lg z-50 p-6 flex flex-col space-y-6 md:hidden transition-transform duration-300",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            "bg-background/90"
          )}
          style={{ width: "100%", height: "auto" }}
        >
          {pathname !== "/termos" && (
            <a
              href="/termos"
              onClick={handleMenuClose}
              className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
            >
              Termos de Uso
            </a>
          )}
          {pathname !== "/privacidade" && (
            <a
              href="/privacidade"
              onClick={handleMenuClose}
              className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors focus:outline-none"
            >
              Política de Privacidade
            </a>
          )}
          <Button asChild variant="default" className="mt-2 font-semibold">
            <a
              href="https://catalogshow.vercel.app/"
              onClick={handleMenuClose}
              className="w-full focus:outline-none text-base"
            >
              Início
            </a>
          </Button>
        </div>
      </header >

      {/* Overlay escuro atrás do menu mobile aberto */}
      {
        isMenuOpen && (
          <div
            onClick={handleMenuClose}
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />
        )
      }
    </>
  );
}
