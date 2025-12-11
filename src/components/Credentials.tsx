import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, MapPin, FileCheck } from "lucide-react";

const Credentials = () => {
  const creaRegistrations = [
    { state: "RJ", number: "2021107818" },
    { state: "SP", number: "5071422553" },
    { state: "ES", number: "202501577" },
    { state: "MG", number: "450913" },
    { state: "SC", number: "226274-4" },
    { state: "PR", number: "234141" },
    { state: "RS", number: "RJ21107818" },
    { state: "DF", number: "37121/V" },
  ];

  const tribunals = [
    "Tribunal de Justiça do Rio de Janeiro (TJRJ)",
    "Tribunal de Justiça de São Paulo (TJSP)",
    "Tribunal de Justiça do Espírito Santo (TJES)",
    "Justiça Federal do Rio de Janeiro (JFRJ)",
    "Tribunal de Justiça de Minas Gerais (TJMG)",
    "Tribunal de Justiça de Santa Catarina (TJSC)",
    "Tribunal de Justiça do Paraná (TJPR)",
    "Tribunal de Justiça do Rio Grande do Sul (TJRS)",
    "Tribunal de Justiça do Distrito Federal (TJDFT)",
  ];

  const states = [
    { name: "Rio de Janeiro", abbr: "RJ" },
    { name: "São Paulo", abbr: "SP" },
    { name: "Espírito Santo", abbr: "ES" },
    { name: "Minas Gerais", abbr: "MG" },
    { name: "Paraná", abbr: "PR" },
    { name: "Santa Catarina", abbr: "SC" },
    { name: "Rio Grande do Sul", abbr: "RS" },
    { name: "Distrito Federal", abbr: "DF" },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a227' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
            Credenciais
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6">
            Qualificações Profissionais
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent mx-auto mb-6" />
          <p className="font-sans text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
            Formação sólida e registro em múltiplos conselhos regionais
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Academic Background */}
          <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-primary/25 to-primary/10 p-4 rounded-xl flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-5">Formação Acadêmica</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-sans font-semibold text-secondary-foreground text-lg">
                        Especialista em Engenharia de Segurança do Trabalho
                      </p>
                      <p className="font-sans text-secondary-foreground/70">
                        Pontifícia Universidade Católica de Minas Gerais (PUC-MG)
                      </p>
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-secondary-foreground text-lg">
                        Graduação em Engenharia Civil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Registrations */}
          <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-primary/25 to-primary/10 p-4 rounded-xl flex-shrink-0">
                  <FileCheck className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-5">Registros Profissionais</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {creaRegistrations.map((reg, index) => (
                      <div 
                        key={index} 
                        className="bg-primary/5 border border-primary/15 rounded-lg p-4 hover:border-primary/30 transition-colors"
                      >
                        <p className="font-sans text-xs text-secondary-foreground/50 uppercase tracking-wider">CREA/{reg.state}</p>
                        <p className="font-sans text-sm font-semibold text-primary mt-1">{reg.number}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tribunal Registrations */}
          <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-primary/25 to-primary/10 p-4 rounded-xl flex-shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-5">Cadastros em Tribunais</h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {tribunals.map((tribunal, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <svg 
                          className="w-4 h-4 text-primary/70 flex-shrink-0 group-hover:text-primary transition-colors" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-sm text-secondary-foreground/80 group-hover:text-secondary-foreground transition-colors">
                          {tribunal}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service States */}
          <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-primary/25 to-primary/10 p-4 rounded-xl flex-shrink-0">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-5">Estados de Atendimento</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {states.map((state, index) => (
                      <div 
                        key={index} 
                        className="bg-primary/5 border border-primary/15 rounded-lg p-4 hover:border-primary/30 transition-colors text-center"
                      >
                        <p className="font-serif font-semibold text-primary text-lg">{state.name}</p>
                        <p className="font-sans text-xs text-secondary-foreground/50 mt-1">{state.abbr}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-white/5 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <CardContent className="p-8 md:p-10">
              <h3 className="font-serif text-2xl font-semibold text-primary mb-5">Resumo Profissional</h3>
              <p className="font-sans text-base text-secondary-foreground/80 leading-relaxed">
                Experiências em engenharia industrial, na construção civil, em gerenciamento de obras, 
                na execução de projetos civis e metálicos, na produção de peças metálicas e em supervisão 
                de equipes. Capacitação técnica em Segurança do Trabalho com especialização pela PUC-MG, 
                aliando conhecimento prático à fundamentação acadêmica para elaboração de laudos técnicos 
                precisos e pareceres especializados.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
