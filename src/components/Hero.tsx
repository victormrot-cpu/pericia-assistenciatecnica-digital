import { Button } from "@/components/ui/button";
import { Scale, Hammer, Building2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center gap-8 mb-8">
            <Scale className="w-16 h-16 text-primary animate-float" />
            <Hammer className="w-16 h-16 text-primary animate-float" style={{
            animationDelay: '0.2s'
          }} />
            <Building2 className="w-16 h-16 text-primary animate-float" style={{
            animationDelay: '0.4s'
          }} />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Perícia Judicial e Assistência Técnica
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white font-light mb-8">
            Engenharia Civil e Segurança do Trabalho
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Especialista em perícias judiciais, assistência técnica e avaliações imobiliárias. 
            Atendimento profissional com laudos técnicos precisos e fundamentados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={scrollToContact}>
              Solicite um Orçamento
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6" onClick={() => document.getElementById('servicos')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Conheça os Serviços
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
              <p className="text-3xl font-bold text-primary mb-2">4</p>
              <p className="text-sm">Tribunais Cadastrados</p>
              <p className="text-xs text-gray-300 mt-1">TJRJ, TJSP, TJES, JFRJ</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
              <p className="text-3xl font-bold text-primary mb-2">3</p>
              <p className="text-sm">Estados de Atuação</p>
              <p className="text-xs text-gray-300 mt-1">Rio de Janeiro, São Paulo, Espírito Santo</p>
            </div>
            <div className="bg-secondary/20 backdrop-blur-sm p-6 rounded-lg border border-primary/30">
              <p className="text-3xl font-bold text-primary mb-2">2</p>
              <p className="text-sm">Especialidades em Engenharia</p>
              <p className="text-xs text-gray-300 mt-1">Civil e Segurança do Trabalho</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;