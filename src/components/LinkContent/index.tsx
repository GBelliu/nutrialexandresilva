import { Box, Button, Container, Content, Perfil, Text } from "./styles";

export function LinkContent() {
  return (
    <Container>
      <Content>
        <Text>ALEXANDRE SILVA</Text>
        <Box>
          <Button id="agendeSuaConsulta" href="https://api.whatsapp.com/send?phone=5519995557295&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional%20com%20o%20Dr.%20Alexandre%C2%A0Silva.">
            AGENDE SUA CONSULTA
          </Button>
          <Button id="atendimentoOnline" href="https://api.whatsapp.com/send?phone=5519995557295&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20nutricional%20com%20o%20Dr.%20Alexandre%C2%A0Silva.">
            ATENDIMENTO ON-LINE
          </Button>
          <Button id="saibaMais" href="/saiba-mais">SAIBA COMO FUNCIONA</Button>
          <Button id="consultoria" href="/">MENTORIA CONSULTÓRIO PRIME</Button>
          <Perfil />
        </Box>
      </Content>
    </Container>
  );
}
