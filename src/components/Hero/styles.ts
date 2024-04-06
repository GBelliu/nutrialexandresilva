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
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    padding: 34px 0 450px 0;
    background: url("heromobile.png");
    background-position: center;
    /* height: 1000px; */
  }
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
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    gap: 50px;
    h1 {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  flex-flow: column;
  gap: 13px;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 767px) {
    gap: 25px;
  }
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
  height: 400px;
  bottom: 0;

  @media (min-width: 768px) {
    display: none;
  }
`;
