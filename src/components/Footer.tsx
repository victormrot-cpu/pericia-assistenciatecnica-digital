import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a227' fill-opacity='0.3'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 py-16 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/20 p-2.5 rounded-lg">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-primary">Victor Moraes</h3>
              </div>
            </div>
            <p className="font-sans text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
              Engenheiro Civil e de Segurança do Trabalho. Especialista em perícia judicial e assistência técnica.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">Serviços</h4>
            <ul className="space-y-3 font-sans text-sm text-secondary-foreground/70">
              <li className="hover:text-primary transition-colors cursor-default">Perícia Judicial</li>
              <li className="hover:text-primary transition-colors cursor-default">Assistência Técnica</li>
              <li className="hover:text-primary transition-colors cursor-default">Avaliações Imobiliárias</li>
              <li className="hover:text-primary transition-colors cursor-default">Engenharia Civil</li>
              <li className="hover:text-primary transition-colors cursor-default">Segurança do Trabalho</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-primary mb-6">Contato</h4>
            <ul className="space-y-3 font-sans text-sm text-secondary-foreground/70">
              <li>(24) 98809-1565</li>
              <li>(21) 97299-6243</li>
              <li className="break-all">engvictorlmoraes@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

        {/* CREA Registrations */}
        <div className="mb-10">
          <h4 className="font-serif text-center text-lg font-semibold text-primary mb-6">
            Registros Profissionais
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {creaRegistrations.map((reg, index) => (
              <div 
                key={index} 
                className="text-center py-3 px-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <span className="font-sans text-xs text-secondary-foreground/50 uppercase tracking-wider">CREA/{reg.state}</span>
                <p className="font-sans text-sm font-semibold text-primary mt-1">{reg.number}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />

        {/* States */}
        <div className="mb-10 text-center">
          <h4 className="font-serif text-lg font-semibold text-primary mb-4">
            Estados de Atuação
          </h4>
          <p className="font-sans text-sm text-secondary-foreground/70">
            Rio de Janeiro • São Paulo • Espírito Santo • Minas Gerais • Paraná • Santa Catarina • Rio Grande do Sul • Distrito Federal
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-sm text-secondary-foreground/50">
            © {currentYear} Victor Moraes — Engenharia Civil e Segurança do Trabalho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
