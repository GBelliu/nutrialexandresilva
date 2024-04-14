import { Box, Button, Container, Content, Perfil, Text } from "./styles";

export function LinkContent() {
  return (
    <Container>
      <Content>
        <Text>ALEXANDRE SILVA</Text>
        <Box>
          <Button>AGENDE SUA CONSULTA</Button>
          <Button>ATENDIMENTO ON-LINE</Button>
          <Button>SAIBA COMO FUNCIONA</Button>
          <Button>MENTORIA CONSULTÓRIO PRIME</Button>
          <Perfil />
        </Box>
      </Content>
    </Container>
  );
}
