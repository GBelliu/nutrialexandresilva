import styled from "styled-components";

export const Container = styled.div`
  background-image: url("./backgroundfooter.png");
  height: fit-content;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 53px;
`;

export const Img = styled.img`
  height: 212px;

  @media (max-width: 1023px) {
    height: 367px;
  }
`;
