import { Button, Container, Content, Video, Text } from "./styles";

export function SaibaMaisContent() {
  return (
    <Container>
      <Content>
        <Video>
          <video controls>
            <source src="/videosaibamais.mp4" type="video/mp4" />
            Download the
            <a href="/videosaibamais.mp4">MP4</a>
          </video>
        </Video>
        <Button href="https://wa.me/5519995557295?text=Ol%C3%A1%2C+acessei+seu+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es+por+favor.">
          GARANTA SEU HORÁRIO
          <span>CLICANDO AQUI</span>
        </Button>
        <Text>"Não basta desejar uma vida melhor, tem que criá-la"</Text>
      </Content>
    </Container>
  );
}
