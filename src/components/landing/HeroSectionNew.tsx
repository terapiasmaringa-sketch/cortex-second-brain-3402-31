import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import heroVideoMockup from '@/assets/hero-video-mockup.jpg';

interface HeroSectionProps {
  showTitle?: boolean;
}

export const HeroSectionNew = ({ showTitle = true }: HeroSectionProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            showTitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
              Encontre a Raiz do Seu{' '}
              <span className="text-primary">Bloqueio</span> e Descubra o{' '}
              <span className="text-accent">Caminho</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Treinamento Sistêmico + Sessão Individual para eliminar padrões 
              repetitivos e desbloquear sua vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg h-auto rounded-full"
              >
                QUERO O NFC AGORA
              </Button>
            </div>
          </div>

          {/* Right Content - Video Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            showTitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={heroVideoMockup}
                  alt="NFC Training Preview"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-primary-foreground rounded-full p-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} className="ml-1" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 font-semibold text-sm animate-bounce">
                Transformação
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm animate-bounce delay-150">
                Resultados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};