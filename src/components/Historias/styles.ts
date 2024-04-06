import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  padding-bottom: 105px;
  justify-content: center;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-bottom: 75px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-flow: column;
  gap: 50px;

  h1 {
    font-size: 38px;
    font-weight: 700;
    line-height: 65px;
    text-align: center;

    span {
      background: radial-gradient(
        50% 50% at 50% 50%,
        #a1632a 0%,
        #fde892 33.5%,
        #fde892 62%,
        #a1632a 100%
      );

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    gap: 30px;
    h1 {
      font-size: 32px;
      line-height: 46px;
    }
  }
  @media (max-width: 767px) {
    max-width: 350px;
    gap: 30px;
    align-items: center;
    h1 {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

export const Columns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 35px;

  @media (max-width: 1750px) {
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-flow: column;
  }
  @media (max-width: 767px) {
    flex-flow: column;
    gap: 20px;
  }
`;
export const Column = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;

  @media (max-width: 1750px) {
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 767px) {
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
`;
export const Item = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%; /* As imagens ocuparão 100% da largura do contêiner Item */
    height: auto; /* Para manter a proporção */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }
  }
`;

export const Divider = styled.div`
  img {
    width: 100%;
  }
`;
