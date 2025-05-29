import { Metadata } from 'next';
import { FileText, ShieldCheck, CheckCircle2, FileSignature, AlertCircle, RefreshCw } from 'lucide-react';
import NavbarRoute from '@/components/layout/NavBarRoute';

export const metadata: Metadata = {
  title: 'Termos de Uso • CatalogShow',
  keywords: 'termos de uso, condições de compra, direitos do consumidor, projetos digitais, catálogos personalizados',
  openGraph: {
    title: 'Termos de Uso • CatalogShow',
    url: 'https://catalogshow.vercel.app/termos',
    description: 'Conheça as regras que garantem uma experiência justa e segura na aquisição dos seus projetos personalizados.',
  },
};

export default function TermosPage() {
  return (
    <div id="home" className="pt-20 pb-12 bg-gradient-to-b from-background to-muted/10">
      <NavbarRoute />

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-primary/10 px-6 py-3 rounded-full mb-4">
            <FileText className="h-6 w-6 text-primary mr-2" />
            <span className="font-medium text-primary">Transparência e Compromisso</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
            Termos de Uso
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Regras que garantem uma experiência segura e justa na criação e entrega dos seus projetos.
          </p>
        </div>

        <div className="space-y-12">
          {/* Condições Comerciais */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FileSignature className="h-8 w-8 text-blue-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  Condições Comerciais
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/10 p-4 rounded-lg border border-muted/20">
                    <h3 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                      <CheckCircle2 className="h-4 w-4" /> Processo de Compra
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✅ Valores e prazos acordados previamente por contrato</li>
                      <li>✅ Entrega digital em até 15 dias úteis após aprovação final</li>
                      <li>✅ Ajustes inclusos conforme escopo previamente definido</li>
                    </ul>
                  </div>
                  <div className="bg-muted/10 p-4 rounded-lg border border-muted/20">
                    <h3 className="font-medium mb-3 flex items-center gap-2 text-blue-500">
                      <ShieldCheck className="h-4 w-4" /> Garantias
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✅ Ajustes de design gratuitos por até 5 dias após entrega</li>
                      <li>✅ Garantia de originalidade e exclusividade do projeto</li>
                      <li>✅ Conformidade com o contrato firmado</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sobre os Projetos */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-amber-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Sobre os Projetos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/10 p-4 rounded-lg border border-muted/20">
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-amber-500">
                      <ShieldCheck className="h-4 w-4" /> Qualidade e Procedência
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Projetos criados sob demanda, com atenção total aos detalhes, seguindo as melhores práticas de design e usabilidade.
                    </p>
                  </div>
                  <div className="bg-muted/10 p-4 rounded-lg border border-muted/20">
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-amber-500">
                      <AlertCircle className="h-4 w-4" /> Escopo Definido
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Alterações fora do escopo original podem gerar custos adicionais, mediante prévia aprovação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Direitos do Cliente */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-8 w-8 text-green-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
                <div className="space-y-4">
                  <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-green-500">
                      <RefreshCw className="h-4 w-4" /> Arrependimento
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Até 7 dias para desistência após a compra, conforme Código de Defesa do Consumidor (Art. 49), desde que o projeto ainda não tenha sido iniciado.
                    </p>
                  </div>
                  <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                    <h3 className="font-medium mb-2 flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" /> Resolução de Problemas
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Caso haja insatisfação, garantimos canais abertos para negociação, revisão do projeto ou cancelamento conforme as condições acordadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nossos Compromissos */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-8 w-8 text-purple-500" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Nossos Compromissos</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    Entrega dentro dos prazos estabelecidos.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    Clareza e transparência em todas as etapas do projeto.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                    Respeito e proteção aos dados fornecidos.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conformidade Legal */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Conformidade Legal</h2>
                <p className="text-muted-foreground mb-2">
                  Atuamos em conformidade com o Código de Defesa do Consumidor (Lei 8.078/90) e demais legislações aplicáveis aos serviços digitais.
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
          </section>

          {/* Aceitação dos Termos */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Aceitação dos Termos</h2>
                <p className="text-muted-foreground text-sm">
                  Ao contratar os serviços da CatalogShow, você concorda integralmente com estes Termos de Uso.
                  Caso não concorde, recomendamos que não prossiga com a contratação.
                </p>
              </div>
            </div>
          </section>

          {/* Modificações nos Termos */}
          <section className="bg-background border border-muted rounded-2xl p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold mb-2">Alterações nos Termos</h2>
                <p className="text-muted-foreground text-sm">
                  Estes Termos podem ser modificados a qualquer momento mediante publicação no site.
                  Recomendamos a revisão periódica para estar sempre atualizado.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
