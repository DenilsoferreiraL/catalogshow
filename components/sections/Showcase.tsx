"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import showroomImage from "@/public/showroom-image.png";
import stockImage from "@/public/stock-image.png";
import detailImage from "@/public/detail-image.png";
import financeImage from "@/public/finance-image.png";
import { ExpandableImage } from "../ui/expandable-image";

export default function Showcase() {
  return (
    <section id="showcase" className="py-10 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Apresente seu Estoque como Nunca Antes
          </motion.h2>
          <motion.p
            className=" text-xl text-muted-foreground max-w-2xl mx-auto "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Veja como nossa solução digital transforma a presença online das concessionárias
          </motion.p>
        </div>

        <Tabs defaultValue="homepage" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="homepage">Showroom</TabsTrigger>
            <TabsTrigger value="inventory">Estoque</TabsTrigger>
            <TabsTrigger value="details">Detalhes</TabsTrigger>
            <TabsTrigger value="finance">Simulação</TabsTrigger>
          </TabsList>

          <TabsContent value="homepage" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <ExpandableImage src={showroomImage} alt="Showroom moderno de concessionária" />

                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-3">Showroom</h3>
                  <p className="text-muted-foreground">
                    Apresente seus veículos em um ambiente digital elegante e envolvente. Nosso showroom virtual destaca cada detalhe com imagens de alta qualidade e um design moderno, criando uma experiência que encanta e conquista seus clientes desde o primeiro clique.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <ExpandableImage src={stockImage} alt="Estoque" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Estoque Dinâmico e Personalizado</h3>
                  <p className="text-muted-foreground">
                    Navegue por um catálogo inteligente que se adapta às preferências do cliente. Filtros avançados facilitam a busca por marca, modelo, ano e preço, tornando a experiência ágil e personalizada.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <ExpandableImage src={detailImage} alt="Detalhes do veículo" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Informações Detalhadas do Veículo</h3>
                  <p className="text-muted-foreground">
                    Páginas de detalhes do veículo que destacam especificações, recursos e múltiplas imagens de alta qualidade.
                    Opções de contato direto permitem que compradores interessados entrem em contato imediatamente.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-borde">
                  <ExpandableImage src={financeImage} alt="Modelo de financiamento" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Simule seu Financiamento</h3>
                  <p className="text-muted-foreground">
                    Página dedicada para simular e solicitar o financiamento do veículo.
                    Ajuste valores de entrada, prazo e visualize parcelas estimadas com base em taxas e condições aproximadas de mercado.
                    A simulação é rápida, transparente e facilita a tomada de decisão.
                  </p>

                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estes exemplos são baseados em nosso trabalho para clientes como
            <a href="https://driveshow.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium ml-1">
              DriveShow
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}