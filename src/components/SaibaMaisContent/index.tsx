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
        <Button href="https://api.whatsapp.com/send?phone=5519995557295&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional%20com%20o%20Dr.%20Alexandre%C2%A0Silva.">
          GARANTA SEU HORÁRIO
          <span>CLICANDO AQUI</span>
        </Button>
        <Text>"Não basta desejar uma vida melhor, tem que criá-la"</Text>
      </Content>
    </Container>
  );
}
