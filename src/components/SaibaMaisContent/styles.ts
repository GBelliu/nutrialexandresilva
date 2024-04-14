import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 500px;
  }
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

export const Video = styled.div`
  width: 100%;

  video {
    width: 100%;
  }
`;

export const Button = styled.a`
  width: fit-content;
  height: fit-content;
  padding: 10px 25px;
  display: flex;
  flex-flow: column;
  line-height: 24px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background-color: #d0b256;
  border-radius: 300px;
  border: 1px solid #00000020;
  color: #fff;
  cursor: pointer;
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #000;
  }

  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 10px 25px;
    line-height: 18px;
    font-weight: 700;
    font-size: 16px;
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
    }
  }
  @media (max-width: 767px) {
    padding: 10px 10px;
    line-height: 18px;
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    span {
      font-size: 13px;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #fff;
  font-weight: 500;
  text-align: center;
`;
