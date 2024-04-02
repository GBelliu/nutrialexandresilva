import { ReactNode } from 'react';

import { Container } from './styles';

interface HistoriasProps {
  children: ReactNode;
}

export function Historias({ children }: HistoriasProps) {
  return (
    <Container>
      <h1>Historias</h1>
      {children}
    </Container>
  );
}
