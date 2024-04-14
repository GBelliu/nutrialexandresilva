import { Banner, Container, Footer } from "./styles";
import { SaibaMaisContent } from "../../components/SaibaMaisContent";

export function SaibaMais() {
  return (
    <Container>
      <Banner />
      <SaibaMaisContent />
      <Footer>
        Atendimento on-line e presencial, nas cidades de Piracicaba, São Pedro e
        Charqueada.
      </Footer>
    </Container>
  );
}
