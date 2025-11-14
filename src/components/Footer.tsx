import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold text-primary">Victor L. Moraes</h3>
            </div>
            <p className="text-primary/80 text-sm">
              Engenheiro Civil e de Segurança do Trabalho. Perícia Judicial e Assistência Técnica.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-primary/80">
              <li>Perícia Judicial</li>
              <li>Assistência Técnica</li>
              <li>Avaliações Imobiliárias</li>
              <li>Engenharia Civil</li>
              <li>Segurança do Trabalho</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-primary/80">
              <li>(24) 98809-1565</li>
              <li>(21) 97299-6243</li>
              <li className="break-all">engvictorlmoraes@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Registros */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-4 text-center text-sm text-primary/80">
            <div>
              <p className="font-semibold text-primary">CREA/RJ: 2021107818</p>
            </div>
            <div>
              <p className="font-semibold text-primary">CREA/SP: 5071422553</p>
            </div>
            <div>
              <p className="font-semibold text-primary">CREA/ES: 202501577</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-8 text-center text-sm text-primary/80">
          <p>© {currentYear} Victor L. Moraes - Engenharia Civil e Segurança do Trabalho. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
