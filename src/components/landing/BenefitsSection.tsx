import { Card, CardContent } from '@/components/ui/card';
import preparationIcon from '@/assets/preparation-icon.jpg';
import consultationIcon from '@/assets/consultation-icon.jpg';
import supportIcon from '@/assets/support-icon.jpg';

interface BenefitsSectionProps {
  show?: boolean;
}

export const BenefitsSection = ({ show = true }: BenefitsSectionProps) => {
  const benefits = [
    {
      title: "Preparação Completa",
      description: "20 dias de treinamento sistêmico com exercícios práticos para preparar você adequadamente.",
      icon: preparationIcon,
      color: "primary"
    },
    {
      title: "Atendimento Individual", 
      description: "Sessão personalizada de 1h20 com especialistas para identificar e resolver bloqueios específicos.",
      icon: consultationIcon,
      color: "accent"
    },
    {
      title: "Suporte Contínuo",
      description: "Acompanhamento pós-atendimento com materiais de apoio e suporte direto via WhatsApp.",
      icon: supportIcon,
      color: "primary"
    }
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Benefícios <span className="text-primary">Exclusivos</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Um programa completo desenvolvido para garantir sua transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={benefit.icon}
                        alt={benefit.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className={`w-16 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r ${
                    benefit.color === 'primary' ? 'from-primary to-primary/60' : 'from-accent to-accent/60'
                  }`}></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};