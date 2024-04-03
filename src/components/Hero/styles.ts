import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 96px 0 180px 0;
  justify-content: center;
  position: relative;
  color: #fff;
  background: linear-gradient(to right, black, transparent),
    url("/backgroundhero.png");
  background-size: cover;
  background-position: 50% 25%;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;
  flex-flow: column;
  gap: 90px;

  h1 {
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    max-width: 500px;
    text-transform: uppercase;
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
    max-width: 100%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const ContentButton = styled.div`
  display: flex;
  flex-flow: column;
  gap: 13px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  max-width: 500px;
`;

export const Human = styled.img`
  position: absolute;
`;
