import styled from "styled-components";

export const Container = styled.div`
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
  background-color: #007505;
  border-radius: 300px;
  border: 1px solid #00000020;
  cursor: pointer;
  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }
`;
