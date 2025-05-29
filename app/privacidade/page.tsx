import { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff, Server } from 'lucide-react';
import NavbarRoute from '@/components/layout/NavBarRoute';

export const metadata: Metadata = {
  title: 'Política de Privacidade • CatalogShow',
  keywords: 'política de privacidade, proteção de dados, LGPD, segurança de informações, direitos do usuário',
  openGraph: {
    title: 'Política de Privacidade • CatalogShow',
    url: 'https://catalogshow.vercel.app/privacidade',
  },
  description: 'Como protegemos e utilizamos seus dados com responsabilidade e transparência.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div id="home" className="pt-20 pb-1 bg-gradient-to-b from-background to-muted/5">
      <NavbarRoute />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Cabeçalho Impactante */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-primary/10 px-6 py-3 rounded-full mb-4">
            <ShieldCheck className="h-6 w-6 text-primary mr-2" />
            <span className="font-medium text-primary">Seus dados estão seguros</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Política de Privacidade
          </h1>
          <p className="text-lg text-blue-700/80 max-w-2xl mx-auto">
            Transparência e respeito. Aqui você entende como usamos, protegemos e cuidamos das suas informações.
          </p>
        </div>

        {/* Seções Visuais */}
        <div className="space-y-8">
          {/* Card 1 - Coleta */}
          <div className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <Server className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">O que coletamos</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 mt-1" />
                    <span>
                      <strong>Dados cadastrais:</strong> Nome, CPF, contato e endereço — essenciais para processar sua documentação.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 mt-1" />
                    <span>
                      <strong>Dados financeiros:</strong> Só o necessário para concluir pagamentos (não armazenamos dados completos de cartões).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 mt-1" />
                    <span>
                      <strong>Dados de navegação:</strong> Para melhorar sua experiência com cookies opcionais.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 - Uso */}
          <div className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <Lock className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Como usamos</h2>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <div className="bg-muted/5 p-4 rounded-lg border border-muted/10">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      Finalidades essenciais
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Emissão de documentos</li>
                      <li>• Processamento de pagamentos</li>
                      <li>• Comunicação sobre sua compra</li>
                    </ul>
                  </div>
                  <div className="bg-muted/5 p-4 rounded-lg border border-muted/10">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      Melhorias opcionais
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Personalização de ofertas (se autorizado)</li>
                      <li>• Análises estatísticas</li>
                      <li>• Atualizações de serviços</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Proteção */}
          <div className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <EyeOff className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Como protegemos</h2>
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px] bg-muted/5 p-4 rounded-lg border border-muted/10">
                    <h3 className="font-medium mb-2 text-green-500">Criptografia</h3>
                    <p className="text-sm text-muted-foreground">
                      Seus dados trafegam com segurança: SSL 256-bit.
                    </p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-muted/5 p-4 rounded-lg border border-muted/10">
                    <h3 className="font-medium mb-2 text-green-500">Acesso restrito</h3>
                    <p className="text-sm text-muted-foreground">
                      Só quem realmente precisa, acessa. Nossa equipe é treinada para isso.
                    </p>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-muted/5 p-4 rounded-lg border border-muted/10">
                    <h3 className="font-medium mb-2 text-green-500">Conformidade</h3>
                    <p className="text-sm text-muted-foreground">
                      Total alinhamento com a LGPD e outras regulamentações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Direitos */}
          <div className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3">Seus direitos</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1 text-amber-500">Controle total</h3>
                    <p className="text-sm text-muted-foreground">
                      Você pode solicitar: acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento.
                    </p>
                  </div>
                  <div className="bg-amber-500/5 p-4 rounded-lg border border-amber-500/10">
                    <h3 className="font-medium mb-1">Como exercer</h3>
                    <p className="text-sm text-muted-foreground">
                      É só enviar um e-mail para <span className="text-amber-500">denilsoferreiraleite@gmail.com</span> com o assunto
                      {` "Proteção de Dados"`}. Respondemos em até 72 horas úteis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destaque Legal */}
        <div className="my-16 p-6 bg-background border border-muted rounded-xl">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/5 p-3 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Compromisso com a LGPD</h3>
              <p className="text-muted-foreground mb-4">
                Seguimos rigorosamente a Lei Geral de Proteção de Dados (Lei 13.709/2018).
                Nosso Encarregado de Dados (DPO) está sempre disponível para garantir seus direitos.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Última atualização:</strong>{' '}
                {new Date().toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
