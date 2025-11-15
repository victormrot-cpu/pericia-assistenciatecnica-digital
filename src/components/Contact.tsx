import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
const Contact = () => {
  const whatsappNumber = "5524988091565";
  const email = "engvictorlmoraes@gmail.com";
  const phone = "(24) 98809-1565";
  const phone2 = "(21) 97299-6243";
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };
  const openEmail = () => {
    window.location.href = `mailto:${email}?subject=Solicitação de Orçamento - Perícia Judicial`;
  };
  return <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solicite um orçamento sem compromisso. Atendimento profissional e resposta rápida.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card WhatsApp */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-card border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg mr-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">Resposta imediata</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-lg font-semibold text-foreground">{phone}</p>
                  <p className="text-lg font-semibold text-foreground">{phone2}</p>
                </div>
                <Button variant="hero" size="lg" onClick={openWhatsApp} className="w-full text-slate-950 bg-yellow-500 hover:bg-yellow-400">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>

            {/* Card Email */}
            <Card className="hover:shadow-xl transition-all duration-300 bg-card border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-4 rounded-lg mr-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">E-mail</h3>
                    <p className="text-muted-foreground">Contato formal</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-foreground mb-6 break-all">
                  {email}
                </p>
                <Button variant="hero-outline" size="lg" onClick={openEmail} className="w-full font-sans text-slate-950 bg-yellow-500 hover:bg-yellow-400">
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Informações Adicionais */}
          <Card className="bg-card border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Telefones</h4>
                  <p className="text-sm text-muted-foreground">{phone}</p>
                  <p className="text-sm text-muted-foreground">{phone2}</p>
                </div>
                <div>
                  <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">E-mail</h4>
                  <p className="text-sm text-muted-foreground break-all">{email}</p>
                </div>
                <div>
                  <div className="bg-primary/10 p-4 rounded-lg inline-block mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Atuação</h4>
                  <p className="text-sm text-muted-foreground">Rio de Janeiro</p>
                  <p className="text-sm text-muted-foreground">São Paulo</p>
                  <p className="text-sm text-muted-foreground">Espírito Santo</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;