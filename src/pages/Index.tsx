import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Victor L. Moraes - Perícia Judicial e Assistência Técnica | Engenheiro Civil</title>
        <meta 
          name="description" 
          content="Engenheiro Civil e de Segurança do Trabalho especializado em perícia judicial, assistência técnica e avaliações imobiliárias. Cadastrado no TJRJ, TJSP, TJES e JFRJ. Atendimento em RJ, SP e ES." 
        />
        <meta 
          name="keywords" 
          content="Assistência Técnica Judicial, assistente técnico judicial engenheiro civil, engenheiro perito civil, avaliação judicial de imóvel, Engenharia Segurança do Trabalho, Engenheiro Civil, Engenheiro de Segurança do Trabalho, perícia judicial, laudo técnico, avaliação imobiliária, TJRJ, TJSP, TJES" 
        />
        <meta name="author" content="Victor L. Moraes" />
        <link rel="canonical" href="https://lovable.dev/projects/1e1ca40e-0b85-4626-bcaa-8c77d2d9d9cb" />
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Expertise />
        <Credentials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
