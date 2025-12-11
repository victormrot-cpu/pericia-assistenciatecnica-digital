import { Card, CardContent } from "@/components/ui/card";
import { FileText, Home, Users, AlertTriangle, Wrench, Shield } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: AlertTriangle,
      title: "Patologias",
      items: [
        "Danos em construções e imóveis",
        "Análise de vícios construtivos",
        "Infiltrações e umidade",
        "Trincas e fissuras estruturais"
      ]
    },
    {
      icon: Home,
      title: "Avaliações",
      items: [
        "Imóveis urbanos",
        "Danos de locação",
        "Renovatória de aluguel",
        "Valor de mercado"
      ]
    },
    {
      icon: Users,
      title: "Relações Civis",
      items: [
        "Direito de vizinhança",
        "Usucapião",
        "Ações possessórias",
        "Nunciação de obra nova"
      ]
    },
    {
      icon: FileText,
      title: "Relações de Consumo",
      items: [
        "Fornecimento de energia",
        "Abastecimento de água",
        "Vícios em produtos",
        "Defeitos em serviços"
      ]
    },
    {
      icon: Wrench,
      title: "Engenharia Civil",
      items: [
        "Análise estrutural",
        "Projetos civis",
        "Execução de obras",
        "Gerenciamento de projetos"
      ]
    },
    {
      icon: Shield,
      title: "Segurança do Trabalho",
      items: [
        "Análise de acidentes",
        "Insalubridade e periculosidade",
        "Normas regulamentadoras",
        "Laudos técnicos (LTCAT, PPP)"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
            Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Áreas de Perícia
          </h2>
          <div className="decorative-line mb-6" />
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiência abrangente em diferentes especialidades da engenharia civil e de segurança do trabalho
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className="premium-card group"
              >
                <CardContent className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-3.5 rounded-xl mr-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      {area.title}
                    </h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-3">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start group/item">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg 
                            className="w-4 h-4 text-primary/70 group-hover/item:text-primary transition-colors" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-sans text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
