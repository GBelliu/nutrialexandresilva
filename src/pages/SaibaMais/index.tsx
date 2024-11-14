import { Banner, Container, Footer } from "./styles";
import { SaibaMaisContent } from "../../components/SaibaMaisContent";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export function SaibaMais() {
  useEffect(() => {
    ReactPixel.init("530500398633975");
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Saiba Mais | Mentoria Consultório Prime</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Banner />
        <SaibaMaisContent />
        <Footer>
          Atendimento on-line e presencial, nas cidades de Piracicaba, São Pedro
          e Charqueada.
        </Footer>
      </Container>
    </>
  );
}
