// import { CarTaxiFront, Mail, Phone, MapPin } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

// export default function Footer() {

//   const whatsappNumber = "5563992922509";
//   const whatsappMessage = "Olá, gostaria de saber mais sobre as soluções digitais para concessionárias que vocês oferecem.";
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

//   return (
//     <footer className="bg-card text-card-foreground border-t">
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <Link href="#home" className="flex items-center gap-2">
//               <CarTaxiFront className="h-6 w-6 text-primary" />
//               <span className="text-xl font-bold">catalogshow</span>
//             </Link>
//             <p className="text-muted-foreground">
//               Soluções digitais profissionais criadas especialmente para concessionárias.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Início
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Recursos
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Benefícios
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#showcase" className="text-muted-foreground hover:text-foreground transition-colors">
//                   Destaques
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-medium mb-4">Contato</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center gap-2">
//                 <Phone className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-muted-foreground">+55 63 992922509</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <Mail className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-muted-foreground">denilsoferreiraleite@gmail.com</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
//                 <span className="text-muted-foreground">Brasil</span>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-medium">Pronto para começar?</h3>
//             <p className="text-muted-foreground">
//               Transforme agora a presença online da sua concessionária.
//             </p>
//             <Button asChild>
//               <Link
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Entre em Contato
//               </Link>
//             </Button>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm text-muted-foreground">
//             &copy; {new Date().getFullYear()} catalogshow. Todos os direitos reservados.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               Política de Privacidade
//             </Link>
//             <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
//               Termos de Serviço
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import { CarTaxiFront, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const whatsappNumber = "5563992922509";
  const whatsappMessage =
    "Olá, gostaria de saber mais sobre as soluções digitais para concessionárias que vocês oferecem.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <button
              onClick={() => {
                const section = document.getElementById("home");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2"
              aria-label="Ir para o início"
            >
              <CarTaxiFront className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">catalogshow</span>
            </button>
            <p className="text-muted-foreground">
              Soluções digitais profissionais criadas especialmente para
              concessionárias.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("home");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Ir para Início"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("features");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Ir para Recursos"
                >
                  Recursos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("benefits");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Ir para Benefícios"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("showcase");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Ir para Destaques"
                >
                  Destaques
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  +55 63 99292-2509
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  denilsoferreiraleite@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                <span className="text-muted-foreground">Brasil</span>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Pronto para começar?</h3>
            <p className="text-muted-foreground">
              Transforme agora a presença online da sua concessionária.
            </p>
            <Button asChild>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                Entre em Contato
              </Link>
            </Button>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} catalogshow. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ver Política de Privacidade"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ver Termos de Serviço"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
