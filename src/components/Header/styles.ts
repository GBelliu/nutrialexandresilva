import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./backgroundgold.png");
  height: 43px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    height: fit-content;
    padding: 10px 0;
  }
`;

export const Text = styled.h1`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
  color: #000;
  span {
    font-weight: 700;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
