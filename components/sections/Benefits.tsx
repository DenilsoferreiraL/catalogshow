"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShieldCheck, BarChart, Search, Smartphone, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Presença Online Profissional",
    description: "Estabeleça credibilidade com um site profissional que reflete a identidade e valores da sua concessionária."
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Construa Confiança",
    description: "Informações transparentes e apresentação profissional geram confiança nos compradores potenciais."
  },
  {
    icon: <Search className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Melhor Visibilidade",
    description: "Páginas otimizadas para SEO ajudam sua concessionária a aparecer nas buscas locais quando os clientes procuram por veículos."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Experiência Mobile",
    description: "Design totalmente responsivo garante uma experiência perfeita em qualquer dispositivo, do desktop ao smartphone."
  },
  {
    icon: <BarChart className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Gestão de Estoque",
    description: "Atualize facilmente seu inventário com novos veículos, preços e especificações através de uma interface simples."
  },
  {
    icon: <DollarSign className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
    title: "Aumente suas Vendas",
    description: "Converta mais leads com apresentações profissionais de veículos e opções diretas de contato."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-blue-50/50 dark:bg-blue-950/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Por que Escolher Nossa Solução Digital?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-700/80 dark:text-blue-300/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nossa plataforma oferece tudo que sua concessionária precisa para ter sucesso online
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-blue-100 dark:border-blue-900/50 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
                <CardHeader className="pb-2">
                  <div className="mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600/80 dark:text-blue-400/80">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <blockquote className="italic text-blue-700/80 dark:text-blue-300/80 text-lg">
            "Desde que implementamos esta solução digital, nossos leads aumentaram em 35% e nossa equipe de vendas pode focar em fechar negócios ao invés de responder perguntas básicas sobre o estoque."
          </blockquote>
          <p className="mt-4 font-medium text-blue-900 dark:text-blue-100">— Roberto Santos, Proprietário de Concessionária</p>
        </motion.div>
      </div>
    </section>
  );
}