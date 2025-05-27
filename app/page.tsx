import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Navbar from '@/components/layout/Navbar';
import Showcase from '@/components/sections/Showcase';
import Benefits from '@/components/sections/Benefits';
import ImageRequirements from '@/components/sections/ImageRequirements';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Soluções Digitais para Concessionárias | Aumente sua Presença Online',
  description: 'Ofereça uma vitrine digital irresistível para sua concessionária. Sites profissionais que aumentam a confiança, destacam seu estoque e potencializam suas vendas online.',
  keywords: 'site para concessionária, soluções digitais automotivas, gestão de estoque de veículos, vitrine online para carros, aumentar vendas de automóveis',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Benefits />
      <ImageRequirements />
      <CTA />
      <Footer />
    </main>
  );
}