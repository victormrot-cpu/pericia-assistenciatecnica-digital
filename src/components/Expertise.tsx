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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Áreas de Perícia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiência abrangente em diferentes especialidades da engenharia civil e de segurança do trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">✓</span>
                        <span>{item}</span>
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
