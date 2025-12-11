import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, Linkedin } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5524988091565";
  const email = "engvictorlmoraes@gmail.com";
  const phone = "(24) 98809-1565";
  const phone2 = "(21) 97299-6243";
  const linkedin = "linkedin.com/in/victorlmoraes";
  
  const openWhatsApp = () => {
    window.open('https://wa.link/lxn5me', '_blank');
  };
  
  const openEmail = () => {
    window.location.href = `mailto:${email}?subject=Solicitação de Orçamento - Perícia Judicial`;
  };
  
  const openLinkedIn = () => {
    window.open('https://linkedin.com/in/victorlmoraes', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Resposta imediata",
      info: [phone, phone2],
      buttonText: "Enviar Mensagem",
      onClick: openWhatsApp,
      primary: true,
    },
    {
      icon: Mail,
      title: "E-mail",
      subtitle: "Contato formal",
      info: [email],
      buttonText: "Enviar E-mail",
      onClick: openEmail,
      primary: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Perfil profissional",
      info: [linkedin],
      buttonText: "Ver Perfil",
      onClick: openLinkedIn,
      primary: false,
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32 bg-muted relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Entre em Contato
          </h2>
          <div className="decorative-line mb-6" />
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso. Atendimento profissional e resposta rápida.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="premium-card group overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-xl mr-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground">
                          {method.title}
                        </h3>
                        <p className="font-sans text-sm text-muted-foreground">
                          {method.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-1 mb-6 min-h-[56px]">
                      {method.info.map((info, idx) => (
                        <p key={idx} className="font-sans text-base font-medium text-foreground break-all">
                          {info}
                        </p>
                      ))}
                    </div>

                    {/* Button */}
                    <Button 
                      onClick={method.onClick} 
                      className={`w-full font-sans font-semibold transition-all duration-300 ${
                        method.primary 
                          ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-[var(--shadow-gold)] hover:shadow-[var(--shadow-gold-lg)]'
                          : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                      }`}
                      size="lg"
                    >
                      {method.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info Card */}
          <Card className="premium-card overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Phones */}
                <div className="group">
                  <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-4 rounded-xl inline-block mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Telefones</h4>
                  <p className="font-sans text-sm text-muted-foreground">{phone}</p>
                  <p className="font-sans text-sm text-muted-foreground">{phone2}</p>
                </div>

                {/* Email */}
                <div className="group">
                  <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-4 rounded-xl inline-block mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">E-mail</h4>
                  <p className="font-sans text-sm text-muted-foreground break-all">{email}</p>
                </div>

                {/* Location */}
                <div className="group">
                  <div className="bg-gradient-to-br from-primary/15 to-primary/5 p-4 rounded-xl inline-block mb-4 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">Atuação</h4>
                  <p className="font-sans text-sm text-muted-foreground">Rio de Janeiro • São Paulo • Espírito Santo</p>
                  <p className="font-sans text-sm text-muted-foreground">Minas Gerais • Paraná • Santa Catarina</p>
                  <p className="font-sans text-sm text-muted-foreground">Rio Grande do Sul • Distrito Federal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
