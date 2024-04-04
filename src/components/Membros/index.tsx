import { Button } from "../elements/Button";
import { Container, Content, Icon, Item, Itens, Text } from "./styles";

export function Membros() {
  return (
    <Container>
      <Content>
        <h1>
          COMO MEMBRO DA <span>MENTORIA COLSUTÓRIO PRIME</span> VOCÊ RECEBE...
        </h1>
        <Itens>
          <Item>
            <Icon src="grupoicon.png" />
            <Text>Grupo Telegram</Text>
          </Item>
          <Item>
            <Icon src="encontroicon.png" />
            <Text>Encontros de Mentoria</Text>
          </Item>
          <Item>
            <Icon src="bibliotecaicon.png" />
            <Text>Biblioteca de Conteúdos</Text>
          </Item>
          <Item>
            <Icon src="eventosicon.png" />
            <Text>Eventos Online</Text>
          </Item>
          <Item>
            <Icon src="estudoicon.png" />
            <Text>Estudo de caso</Text>
          </Item>
          <Item>
            <Icon src="planilhaicon.png" />
            <Text>Planilha Financeira</Text>
          </Item>
        </Itens>
        <Button
          subtext="CLIQUE AQUI E FAÇA SUA APLICAÇÃO"
          text="QUERO ESCALAR MEU NEGÓCIO"
        />
      </Content>
    </Container>
  );
}
