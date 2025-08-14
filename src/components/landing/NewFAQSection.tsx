import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface NewFAQSectionProps {
  show?: boolean;
}

export const NewFAQSection = ({ show = true }: NewFAQSectionProps) => {
  const [openItem, setOpenItem] = useState<string>("item-1");

  const faqs = [
    {
      id: "item-1",
      question: "Como funciona a garantia?",
      answer: "Você tem 7 dias completos para vivenciar o NFC e sentir os resultados. Se dentro desse período você entender que não é para você, basta solicitar o reembolso e devolveremos 100% do seu investimento, sem burocracia e sem perguntas. O risco é todo nosso."
    },
    {
      id: "item-2", 
      question: "O atendimento é presencial ou online?",
      answer: "O NFC é 100% online, com sessões ao vivo e acesso à plataforma, podendo participar de qualquer lugar do mundo. Basta ter um celular, tablet ou computador com internet para vivenciar todo o processo."
    },
    {
      id: "item-3",
      question: "Quem vai me atender?",
      answer: "Mulheres são atendidas pela Thalyta Brito e homens pelo Wellington Finoti, garantindo um ambiente seguro, direcionado e confortável para lidar com questões profundas e pessoais."
    },
    {
      id: "item-4",
      question: "Quanto tempo dura o atendimento individual?",
      answer: "A sessão individual tem duração média de 1h20. Antes dela, você fará uma trilha de preparação de 20 dias (30 min/dia), e depois terá acesso a materiais e acompanhamento para consolidar os resultados."
    },
    {
      id: "item-5",
      question: "Preciso ter experiência com constelação sistêmica ou terapias?",
      answer: "Não. O NFC foi criado para qualquer pessoa, independentemente de já ter passado por processos terapêuticos antes. Todo o conteúdo é guiado e explicado de forma simples, mesmo para quem nunca teve contato com terapias."
    }
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre o programa
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Accordion 
            type="single" 
            value={openItem} 
            onValueChange={setOpenItem}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors duration-200 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};