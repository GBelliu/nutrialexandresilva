import { LinkContent } from "../../components/LinkContent";
import { Bottom, Container, Content, Top } from "./styles";

export function Links() {
  return (
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
  );
}
