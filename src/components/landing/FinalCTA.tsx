import { Button } from '@/components/ui/button';
import { CheckCircle, Clock } from 'lucide-react';

interface FinalCTAProps {
  show?: boolean;
}

export const FinalCTA = ({ show = true }: FinalCTAProps) => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Garanta Seu Atendimento{' '}
            <span className="text-white/90">Exclusivo</span> e Comece Sua{' '}
            <span className="text-white/90">Transformação Hoje</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Não deixe para amanhã a oportunidade de transformar sua vida. 
            Vagas são limitadas para garantir a qualidade do atendimento.
          </p>

          <div className="mb-8">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-12 py-6 text-xl h-auto rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Começar Minha Transformação Agora
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-medium">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span className="font-medium">Vagas limitadas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};