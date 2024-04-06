import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 38px 0;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: url("/backgroundgold.png");
  background-size: cover;
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
  }
`;

export const Text = styled.h2`
  font-size: 35px;
  font-weight: 400;
  font-style: italic;
  line-height: 36px;
  color: #000;
  text-align: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
    text-align: center;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    text-align: center;
  }
`;
