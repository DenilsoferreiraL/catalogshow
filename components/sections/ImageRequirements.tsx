"use client";

import { motion } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Palette, Image, FileImage } from "lucide-react";

export default function ImageRequirements() {
  return (
    <section id="features" className="py-10 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Começar é Fácil
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Veja o que precisamos de você para criar o seu site profissional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-border/50">
            <CardHeader className="pb-2">
              <div className="mb-4">
                <Image className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Requisitos de Imagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <FileImage className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Logo da Concessionária</p>
                  <p className="text-sm text-muted-foreground">
                    Seu logotipo oficial em alta resolução (preferencialmente em formato vetorial ou PNG com fundo transparente).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Fotos dos Veículos</p>
                  <p className="text-sm text-muted-foreground">
                    Imagens de alta qualidade de cada veículo do seu estoque (mínimo de 5 fotos por carro).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Fotos da Concessionária</p>
                  <p className="text-sm text-muted-foreground">
                    Fotos do seu espaço físico, showroom e equipe para personalizar ainda mais o seu site.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/50">
            <CardHeader className="pb-2">
              <div className="mb-4">
                <Palette className="h-10 w-10 text-primary" />
              </div>
              <CardTitle>Serviços de Design</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ainda não tem um logotipo profissional ou quer melhorar o atual? Conte com nossos serviços de design!
              </p>

              <div className="space-y-2">
                <p className="font-medium">Serviços Adicionais:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Criação de logotipo profissional</li>
                  <li>Criação de banners personalizados</li>
                  <li>Edição e aprimoramento de fotos dos veículos</li>
                  <li>Design de materiais para marketing</li>
                </ul>
              </div>

              <p className="text-sm mt-4">
                <span className="font-medium">Observação:</span> Os serviços de design são contratados separadamente e podem ser discutidos durante a consultoria.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
