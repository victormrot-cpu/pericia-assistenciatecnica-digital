import { Button } from "@/components/ui/button";
import { Scale, Hammer, Building2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.link/lxn5me', '_blank');
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
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-yellow-400 bg-clip-text text-transparent mb-6 leading-tight drop-shadow-lg">
            Perícia Judicial e Assistência Técnica
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
            Engenharia Civil e Segurança do Trabalho
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Especialista em perícias judiciais, assistência técnica e avaliações imobiliárias. 
            Atendimento profissional com laudos técnicos precisos e fundamentados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-10 py-7 shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-105 transition-all" onClick={openWhatsApp}>
              Solicite um Orçamento
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-10 py-7 hover:scale-105 transition-all" onClick={() => document.getElementById('servicos')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Conheça os Serviços
            </Button>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-primary/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white/15">
              <p className="text-5xl font-bold text-primary mb-3 drop-shadow-lg">4</p>
              <p className="text-base font-semibold">Tribunais Cadastrados</p>
              <p className="text-xs text-gray-200 mt-2 font-medium">TJRJ, TJSP, TJES, JFRJ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-primary/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white/15">
              <p className="text-5xl font-bold text-primary mb-3 drop-shadow-lg">3</p>
              <p className="text-base font-semibold">Estados de Atuação</p>
              <p className="text-xs text-gray-200 mt-2 font-medium">Rio de Janeiro, São Paulo, Espírito Santo</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border-2 border-primary/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white/15">
              <p className="text-5xl font-bold text-primary mb-3 drop-shadow-lg">2</p>
              <p className="text-base font-semibold">Especialidades em Engenharia</p>
              <p className="text-xs text-gray-200 mt-2 font-medium">Civil e Segurança do Trabalho</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;