import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 75px;
  padding-bottom: 125px;
  justify-content: center;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-bottom: 75px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
    padding-top: 50px;
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
  gap: 90px;

  h1 {
    font-size: 54px;
    font-weight: 700;

    text-transform: uppercase;
    text-align: center;

    span {
      color: #ffd600;
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

export const Text = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  p {
    color: #fff;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;

    span {
      color: #ffd600;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    p {
      font-size: 20px;
      line-height: 20px;
    }
  }
  @media (max-width: 767px) {
    gap: 20px;
    p {
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
