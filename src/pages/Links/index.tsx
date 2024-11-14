import { useEffect } from "react";
import { LinkContent } from "../../components/LinkContent";
import { Bottom, Container, Content, Top } from "./styles";
import ReactPixel from "react-facebook-pixel";
import TagManager from "react-gtm-module"; // Certifique-se de que o TagManager foi importado corretamente
import { Helmet } from "react-helmet";

export function Links() {
  useEffect(() => {
    // Inicializar o Facebook Pixel
    ReactPixel.init("898048755761591");

    // Inicializar o Google Tag Manager
    const tagManagerArgs = {
      gtmId: "GTM-MJFXW5RD" // Substitua pelo seu ID real do GTM
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Links | Mentoria Consultório Prime</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Content>
          <Top src="top.png" />
          <LinkContent />
          <Bottom src="bottom.png" />
          <video autoPlay muted loop>
            <source src="backgroundlinks.mp4" type="video/mp4" />
          </video>
        </Content>
      </Container>
    </>
  );
}
