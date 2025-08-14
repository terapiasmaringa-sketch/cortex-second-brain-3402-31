
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Navbar } from '@/components/landing/Navbar';
import { HeroSectionNew } from '@/components/landing/HeroSectionNew';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { TestimonialsSlider } from '@/components/landing/TestimonialsSlider';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { NewFAQSection } from '@/components/landing/NewFAQSection';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
import { LoadingScreen } from '@/components/landing/LoadingScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const showHero = useAnimateIn(false, 300);
  const showBenefits = useAnimateIn(false, 600);
  const showTestimonials = useAnimateIn(false, 900);
  const showGuarantee = useAnimateIn(false, 1200);
  const showFAQ = useAnimateIn(false, 1500);
  const showFinalCTA = useAnimateIn(false, 1800);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <div className="relative min-h-screen">
      {/* Fixed Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSectionNew showTitle={showHero} />
        
        {/* Benefits Section */}
        <BenefitsSection show={showBenefits} />
        
        {/* Testimonials Section */}
        <TestimonialsSlider show={showTestimonials} />
        
        {/* Guarantee Section */}
        <GuaranteeSection show={showGuarantee} />
        
        {/* FAQ Section */}
        <NewFAQSection show={showFAQ} />
        
        {/* Final CTA */}
        <FinalCTA show={showFinalCTA} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
