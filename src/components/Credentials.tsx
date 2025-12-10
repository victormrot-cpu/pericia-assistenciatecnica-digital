import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, MapPin, FileCheck } from "lucide-react";

const Credentials = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Qualificações Profissionais
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Formação sólida e registro em múltiplos conselhos regionais
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Formação */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">Formação Acadêmica</h3>
                  <div className="space-y-3 text-primary/90">
                    <p className="text-lg">
                      <strong>Especialista em Engenharia de Segurança do Trabalho</strong>
                    </p>
                    <p>Pontifícia Universidade Católica de Minas Gerais (PUC-MG)</p>
                    <p className="mt-2">
                      <strong>Graduação em Engenharia Civil</strong>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registros */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">Registros Profissionais</h3>
                  <div className="grid md:grid-cols-4 gap-6 text-primary/90">
                    <div>
                      <p className="font-semibold text-primary">CREA/RJ</p>
                      <p className="text-sm">2021107818</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/SP</p>
                      <p className="text-sm">5071422553</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/ES</p>
                      <p className="text-sm">202501577</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/MG</p>
                      <p className="text-sm">450913</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/SC</p>
                      <p className="text-sm">226274-4</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/PR</p>
                      <p className="text-sm">234141</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/RS</p>
                      <p className="text-sm">RJ21107818</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">CREA/DF</p>
                      <p className="text-sm">37121/V</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cadastros Tribunais */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">Cadastros em Tribunais</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-primary/90">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça do Rio de Janeiro (TJRJ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça de São Paulo (TJSP)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça do Espírito Santo (TJES)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Justiça Federal do Rio de Janeiro (JFRJ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça de Minas Gerais (TJMG)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça de Santa Catarina (TJSC)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça do Paraná (TJPR)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça do Rio Grande do Sul (TJRS)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Tribunal de Justiça do Distrito Federal (TJDFT)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Localidades */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-4">Estados de Atendimento</h3>
                  <div className="grid md:grid-cols-4 gap-6 text-primary/90">
                    <div>
                      <p className="font-semibold text-primary text-lg">Rio de Janeiro</p>
                      <p className="text-sm">RJ</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">São Paulo</p>
                      <p className="text-sm">SP</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Espírito Santo</p>
                      <p className="text-sm">ES</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Minas Gerais</p>
                      <p className="text-sm">MG</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Paraná</p>
                      <p className="text-sm">PR</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Santa Catarina</p>
                      <p className="text-sm">SC</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Rio Grande do Sul</p>
                      <p className="text-sm">RS</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">Distrito Federal</p>
                      <p className="text-sm">DF</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resumo Profissional */}
          <Card className="bg-card/10 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Resumo Profissional</h3>
              <p className="text-lg text-primary/90 leading-relaxed">
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
