import { Button } from "@/components/ui/button";
import { Scale, Hammer, Building2, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.link/lxn5me', '_blank');
  };

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 12, 10, 0.75), rgba(15, 12, 10, 0.85)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center gap-6 md:gap-10 mb-10 animate-reveal">
            <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-full border border-primary/20">
              <Scale className="w-10 h-10 md:w-12 md:h-12 text-primary animate-float" />
            </div>
            <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-full border border-primary/20">
              <Hammer className="w-10 h-10 md:w-12 md:h-12 text-primary animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="bg-primary/10 backdrop-blur-sm p-4 rounded-full border border-primary/20">
              <Building2 className="w-10 h-10 md:w-12 md:h-12 text-primary animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.1] animate-reveal-delay-1 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-yellow-400 to-primary bg-clip-text text-transparent">
              Perícia Judicial
            </span>
            <br />
            <span className="text-white/95">e Assistência Técnica</span>
          </h1>

          {/* Decorative line */}
          <div className="flex justify-center mb-8 animate-reveal-delay-2">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
          
          {/* Subtitle */}
          <h2 className="font-sans text-lg md:text-xl text-primary/90 font-medium tracking-wide uppercase mb-6 animate-reveal-delay-2">
            Engenheiro Civil e de Segurança do Trabalho Victor Moraes
          </h2>
          
          {/* Description */}
          <p className="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 animate-reveal-delay-3">
            Especialista em perícias judiciais, assistência técnica e avaliações imobiliárias. 
            Atendimento profissional com laudos técnicos precisos e fundamentados.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-reveal-delay-3">
            <Button 
              variant="default" 
              size="lg" 
              className="btn-shine text-base px-8 py-6 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-lg)] transition-all duration-300" 
              onClick={openWhatsApp}
            >
              Solicite um Orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-6 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300" 
              onClick={scrollToServices}
            >
              Conheça os Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 animate-reveal-delay-3">
            {[
              { number: "9", label: "Tribunais Cadastrados", detail: "TJRJ, TJSP, TJES, JFRJ, TJMG, TJSC, TJPR, TJRS, TJDFT" },
              { number: "8", label: "Estados de Atuação", detail: "RJ, SP, ES, MG, PR, SC, RS, DF" },
              { number: "2", label: "Especialidades em Engenharia", detail: "Civil e Segurança do Trabalho" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all duration-500"
              >
                <p className="font-serif text-5xl md:text-6xl font-semibold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="font-sans text-sm font-semibold text-white/90 uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="font-sans text-xs text-white/50">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
