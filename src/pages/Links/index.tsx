import { useEffect } from "react";
import { LinkContent } from "../../components/LinkContent";
import { Bottom, Container, Content, Top } from "./styles";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
export function Links() {
  useEffect(() => {
    ReactPixel.init("898048755761591");
    ReactGA.initialize("G-8LDTKE06NS");
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
