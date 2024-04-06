import { Button } from "../elements/Button";
import { Container, Content, ContentButton, Human, Text } from "./styles";

export function Hero() {
  return (
    <Container>
      <Content>
        <h1>
          Do <span>consultório</span> ao <span> sucesso empresarial</span>:
          mentoria especializada para <span>nutricionistas ambiciosos</span>
        </h1>
        <ContentButton>
          <Button
            text="Quero Alavancar Meu Consultório"
            subtext="CLIQUE AQUI E FAÇA SUA APLICAÇÃO"
          />
          <Text>
            * Sujeito a aprovação. O simples preenchimento da aplicação não
            garante sua entrada no programa.  Vagas limitadas.
          </Text>
        </ContentButton>
        {/* <Human src="nutriperfil.png" /> */}
      </Content>
    </Container>
  );
}
