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
    max-width: 1200px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    gap: 30px;
    h1 {
      font-size: 32px;
      line-height: 46px;
    }
  }
  @media (max-width: 767px) {
    max-width: 350px;
    gap: 30px;
    align-items: center;
    h1 {
      font-size: 24px;
      line-height: 29px;
    }
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
  overflow: hidden;

  @media (max-width: 1750px) {
    width: 60%;
  }
  @media (max-width: 1023px) {
    width: 100%;
    position: static;
    padding: 0px;
  }
`;
export const Name = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 63px;

  @media (max-width: 1023px) {
    font-size: 28px;

    line-height: 34px;
  }
`;
export const Job = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;

  @media (max-width: 1023px) {
    font-size: 16px;

    line-height: 19px;
  }
`;
export const BoxDivider = styled.div`
  height: 3px;
  width: 100%;
  background: linear-gradient(to right, #ff9900, #ffe896, #ff9900);

  @media (max-width: 1023px) {
    margin-top: 10px;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  @media (max-width: 1023px) {
    margin-top: 30px;
  }
`;
export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;

  @media (max-width: 1023px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
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

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const TopText = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
`;

export const ImageMobile = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  position: relative;
  img {
    height: 748px;
    width: 100vw;
    object-fit: cover;
    object-position: right;
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0px 4px 250px #000000;
    width: 100%;
    height: 100%;
  }
`;
