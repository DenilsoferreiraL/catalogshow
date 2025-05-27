"use client";

import 'odometer/themes/odometer-theme-default.css';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Car } from "lucide-react";
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

// Carregamento dinâmico do odômetro
const Odometer = dynamic(() => import('react-odometerjs'), {
  ssr: false,
  loading: () => <span className="inline-block w-20">0</span>
});

export default function CTA() {
  const [odometerValues, setOdometerValues] = useState({
    concessionarias: 0,
    aumento: 0,
    veiculos: 0
  });

  const { ref, inView } = useInView({
    triggerOnce: true,   // dispara apenas uma vez
    threshold: 0.7,      // 70% da seção visível para disparar
  });

  useEffect(() => {
    if (inView) {
      setOdometerValues({
        concessionarias: 37,
        aumento: 42,
        veiculos: 537
      });
    }
  }, [inView]);

  const whatsappNumber = "+5563992922509";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de agendar uma demonstração do catálogo digital.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden dark:from-blue-950 dark:to-gray-900"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute inset-0 bg-grid-blue-500/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-blue-900 dark:text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Catálogo Digital que Impulsiona suas Vendas
          </motion.h2>

          <motion.p
            className="text-xl text-blue-700/80 dark:text-blue-300/80 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Apresente seu estoque de veículos de forma profissional, aumente seu alcance e converta mais visitantes em clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Car className="mr-2 h-5 w-5" />
                Solicitar Demonstração
              </Link>
            </Button>

            <p className="mt-6 text-sm text-blue-600/80 dark:text-blue-400/80">
              Agende uma demonstração gratuita e veja como podemos revolucionar sua vitrine digital
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 h-12 flex items-center justify-center min-w-[100px]">
              <Odometer value={odometerValues.concessionarias} format="(,ddd)" duration={2000} />+
            </div>
            <p className="text-sm text-blue-600/80 dark:text-blue-400/80 mt-2">Concessionárias Satisfeitas</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 h-12 flex items-center justify-center min-w-[80px]">
              <Odometer value={odometerValues.aumento} format="(,ddd)" duration={2000} />%
            </div>
            <p className="text-sm text-blue-600/80 dark:text-blue-400/80 mt-2">Aumento em Visibilidade</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 h-12 flex items-center justify-center min-w-[120px]">
              <Odometer value={odometerValues.veiculos} format="(,ddd)" duration={2500} />+
            </div>
            <p className="text-sm text-blue-600/80 dark:text-blue-400/80 mt-2">Veículos Catalogados</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 h-12 flex items-center justify-center">
              24/7
            </div>
            <p className="text-sm text-blue-600/80 dark:text-blue-400/80 mt-2">Disponibilidade do Catálogo</p>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .odometer.odometer-auto-theme, .odometer.odometer-theme-default {
          font-family: inherit;
          line-height: inherit;
        }
        .odometer-digit {
          display: inline-flex;
          vertical-align: middle;
          position: relative;
        }
        .odometer-ribbon {
          display: block;
        }
        .odometer-ribbon-inner {
          display: block;
          backface-visibility: hidden;
        }
        .odometer-value {
          text-align: center;
          display: block;
        }
      `}</style>
    </section>
  );
}

