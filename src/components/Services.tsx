import { Card, CardContent } from "@/components/ui/card";
import periciaIcon from "@/assets/pericia-icon.png";
import assistenciaIcon from "@/assets/assistencia-icon.png";
import avaliacaoIcon from "@/assets/avaliacao-icon.png";

const Services = () => {
  const services = [
    {
      icon: periciaIcon,
      title: "Perícia Judicial",
      description: "Elaboração de laudos técnicos precisos e imparciais para processos judiciais, com análise detalhada de patologias, danos em construções e avaliações imobiliárias.",
      areas: [
        "Patologias em edificações",
        "Danos estruturais e não estruturais",
        "Avaliação de imóveis urbanos",
        "Análise de vícios construtivos"
      ]
    },
    {
      icon: assistenciaIcon,
      title: "Assistência Técnica",
      description: "Acompanhamento técnico em processos judiciais, representando os interesses das partes com pareceres fundamentados e quesitos técnicos especializados.",
      areas: [
        "Análise crítica de laudos periciais",
        "Elaboração de pareceres técnicos",
        "Formulação de quesitos",
        "Acompanhamento de vistorias"
      ]
    },
    {
      icon: avaliacaoIcon,
      title: "Avaliações Imobiliárias",
      description: "Avaliações de imóveis urbanos conforme normas técnicas da ABNT, para processos judiciais, renovatórias de aluguel e danos de locação.",
      areas: [
        "Avaliação para renovatória de aluguel",
        "Danos de locação",
        "Desapropriações",
        "Valor de mercado de imóveis"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 bg-muted relative">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
            O que oferecemos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Serviços Especializados
          </h2>
          <div className="decorative-line mb-6" />
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise técnica aliada ao conhecimento jurídico para laudos e pareceres de excelência
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="premium-card group overflow-hidden"
            >
              {/* Gold accent top */}
              <div className="h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60" />
              
              <CardContent className="p-8 md:p-10">
                {/* Icon */}
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150 group-hover:bg-primary/20 transition-all duration-500" />
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-20 h-20 md:w-24 md:h-24 relative z-10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-muted-foreground mb-8 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                {/* Areas */}
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                    Áreas de atuação
                  </h4>
                  <ul className="space-y-3">
                    {service.areas.map((area, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="font-sans text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {area}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
