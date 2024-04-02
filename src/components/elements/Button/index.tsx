import { Container } from "./styles";

interface ButtonProps {
  text: string;
  subtext: string;
}

export function Button({ text, subtext }: ButtonProps) {
  return (
    <Container>
      {text}
      <span>{subtext}</span>
    </Container>
  );
}
