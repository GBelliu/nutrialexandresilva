import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  position: relative;
  justify-content: center;

  video {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const Top = styled.img`
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
`;

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;

  width: 100%;
  object-fit: cover;
`;
