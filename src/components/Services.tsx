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
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise técnica aliada ao conhecimento jurídico para laudos e pareceres de excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border-2 border-primary/20"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-24 h-24 mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-primary/20 pt-6">
                  <h4 className="font-semibold text-foreground mb-3">Áreas de atuação:</h4>
                  <ul className="space-y-2">
                    {service.areas.map((area, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm text-muted-foreground">{area}</span>
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
