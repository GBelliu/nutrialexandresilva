import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 55px;

  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-flow: column;
  gap: 50px;

  h1 {
    font-size: 38px;
    font-weight: 700;
    line-height: 46px;
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

export const Divider = styled.div`
  img {
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  position: relative;
`;
export const BoxText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: #00000050;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(7px);
  padding: 40px 57px 90px 80px;
  position: absolute;
  top: 0;
  right: 0;
  gap: 20px;
  overflow: auto;
`;
export const Name = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 63px;
`;
export const Job = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
`;
export const BoxDivider = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(to right, #ff9900, #ffe896, #ff9900);
`;
export const Texts = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
`;
export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;
export const Image = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    max-height: 850px;
  }
`;

export const TopText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
`;
