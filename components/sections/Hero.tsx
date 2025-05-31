"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "@/public/hero-image.png";

export default function Hero() {
  const whatsappNumber = "+5563992922509";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a solução digital para minha concessionária.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative pt-20 pb-15 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/80 to-white dark:from-blue-950 dark:via-blue-950/80 dark:to-gray-900 pointer-events-none" />

      <div className="container relative mx-auto px-2 sm:px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className=" py-3 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.2] tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolucione sua <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">Concessionária</span>
            <br />
            com{' '}
            <span className="inline-block bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-primary to-foreground">
              Presença Digital
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-1xl text-blue-700 dark:text-blue-300/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Destaque seu estoque com um site profissional que transmite confiança
            e impulsiona suas vendas no ambiente digital.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-gradient-to-r from-primary to-foreground"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Comece Agora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/50"
            >
              <button
                onClick={() => {
                  const section = document.getElementById('showcase');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Demonstração
              </button>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="aspect-[13/9] rounded-xl overflow-hidden shadow-2xl relative">
            <Image
              src={HeroImage}
              alt="Showroom moderno de concessionária"
              className="object-cover"
              fill
              priority
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 md:p-6 border border-blue-100 dark:border-blue-900/50 hidden md:block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="font-semibold mb-2 text-blue-700 dark:text-blue-100">Nossos clientes relatam:</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-700 font-bold text-lg">+35%</span>
              <span className="text-green-700 dark:text-blue-400/80">em conversão de leads</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
