import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle } from 'lucide-react';

interface GuaranteeSectionProps {
  show?: boolean;
}

export const GuaranteeSection = ({ show = true }: GuaranteeSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-secondary/5 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-6 rounded-full">
                  <Shield size={48} className="text-primary" />
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Garantia Incondicional de{' '}
                <span className="text-primary">7 Dias</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Você tem 7 dias completos após a compra para testar o programa. 
                Se por qualquer motivo você sentir que não é para você, basta nos 
                enviar um e-mail e devolveremos 100% do seu investimento, sem perguntas.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-foreground font-medium">100% do seu dinheiro de volta</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-foreground font-medium">Sem perguntas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-foreground font-medium">Garantia total</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-2 border-primary/20 rounded-full opacity-30"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-accent/20 rounded-full opacity-30"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};