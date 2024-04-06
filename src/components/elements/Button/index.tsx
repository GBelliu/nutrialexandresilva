import { Container, Content } from "./styles";

interface ButtonProps {
  text: string;
  subtext: string;
}

export function Button({ text, subtext }: ButtonProps) {
  return (
    <Container
      href="https://wa.me/5519993334160?text=Ol%C3%A1%2C+vim+do+site%2C+tenho+interesse+na+Mentoria+Consult%C3%B3rio+Prime%2C+e+gostaria+de+mais+informa%C3%A7%C3%B5es"
      target="_blank"
    >
      <Content>
        {text}
        <span>{subtext}</span>
      </Content>
    </Container>
  );
}
