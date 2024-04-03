import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 55px;
  padding-bottom: 105px;
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
  gap: 50px;

  h1 {
    font-size: 54px;
    font-weight: 700;
    line-height: 65px;
    text-align: center;
    max-width: 780px;
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

export const Columns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  gap: 35px;
`;
export const Column = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 28px;
`;
export const Item = styled.div`
  width: 100%;
  height: 100%;
`;

export const Divider = styled.div`
  img {
    width: 100%;
  }
`;
