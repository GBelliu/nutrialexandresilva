import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 125px;
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
  gap: 120px;

  h1 {
    font-size: 54px;
    font-weight: 700;
    line-height: 65px;
    text-align: center;
    max-width: 780px;
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

export const Itens = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 25px;
  }
  @media (max-width: 767px) {
    gap: 25px;
    align-items: center;
    flex-flow: column;
  }
`;
export const Item = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Icon = styled.img`
  height: 130px;

  @media (max-width: 1750px) {
    height: 100px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 100px;
  }
  @media (max-width: 767px) {
    height: 90px;
  }
`;

export const Text = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  max-width: 150px;

  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 39px;
    max-width: 100%;
  }
`;
