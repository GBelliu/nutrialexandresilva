import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-top: 75px;
  padding-bottom: 125px;
  justify-content: center;
  color: #fff;
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
    max-width: 100%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    align-items: center;
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
`;
