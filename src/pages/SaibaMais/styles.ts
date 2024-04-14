import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: fit-content;
`;

export const Banner = styled.div`
  height: 75px;
  width: 100%;
  background-image: url("/backgroundfooter.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Footer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/backgroundfooter.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 500;
`;
