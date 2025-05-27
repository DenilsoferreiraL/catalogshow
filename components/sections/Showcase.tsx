"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Showcase() {
  return (
    <section id="showcase" className="py-16 md:py-24 bg-card">
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
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Veja como nossa solução digital transforma a presença online das concessionárias
          </motion.p>
        </div>

        <Tabs defaultValue="homepage" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="homepage">Página Inicial</TabsTrigger>
            <TabsTrigger value="inventory">Inventário</TabsTrigger>
            <TabsTrigger value="details">Detalhes do Veículo</TabsTrigger>
          </TabsList>

          <TabsContent value="homepage" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Exemplo de página inicial da concessionária"
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Design Profissional da Página Inicial</h3>
                  <p className="text-muted-foreground">
                    Nossas páginas iniciais criam uma forte primeira impressão com os clientes potenciais.
                    Layouts limpos, imagens profissionais e chamadas para ação claras guiam os visitantes para explorar seu inventário.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Exemplo de página de inventário"
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Exibição Organizada do Inventário</h3>
                  <p className="text-muted-foreground">
                    Apresente todo seu inventário com opções avançadas de filtragem.
                    Os clientes podem facilmente navegar por marca, modelo, ano, faixa de preço e mais para encontrar o veículo perfeito.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src="https://images.pexels.com/photos/10415353/pexels-photo-10415353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Exemplo de página de detalhes do veículo"
                    className="w-full h-auto object-cover aspect-video"
                  />
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
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Estes exemplos são baseados em nosso trabalho para clientes como
            <a href="https://oficial-motors.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium ml-1">
              DriveShow
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}