import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding-bottom: 125px;
  justify-content: center;
  color: #fff;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-bottom: 75px;
  }
  @media (max-width: 767px) {
    padding-bottom: 50px;
  }
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
    line-height: 65px;
    text-align: center;
    max-width: 780px;
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
    max-width: 965px;
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
`;

export const ContentSlide = styled.div`
  display: flex;

  width: 100vw;

  .swiper {
    width: 100%;
    /* box-sizing: border-box; */
    position: relative;
  }

  .swiper-wrapper {
    /* gap: 10px; */
    /* width: 100%; */
    /* margin-left: -80px; */
    /* display: flex; */
    /* justify-content: center; */
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    z-index: 10;
    width: 75px;
    height: 75px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    &::after {
      font-size: 25px;
      font-weight: 600;
    }

    &:active {
      transform: scale(0.95) translateZ(0px) !important;
    }

    &:hover {
      transform: scale(1.03) translateZ(0px);
    }
  }

  .swiper-button-prev {
    margin-left: auto;
    margin-right: auto;
    left: -100px;
    right: 0;
    top: 85%;
    background: #fff;
    color: #000000;
  }

  .swiper-button-next {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: -100px;
    top: 85%;
    background: #356dff;
    color: #ffffff;
  }

  .swiper-button-disabled {
    opacity: 0.4;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 767px) {
    .swiper-button-next,
    .swiper-button-prev {
      top: 95%;
      width: 50px;
      height: 50px;
    }
  }
`;

export const ImageItem = styled.div`
  width: fit-content;
  height: fit-content;
  box-shadow: inset 0px 4px 34px #000000;

  img {
    width: 380px;
    height: 650px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    img {
      width: 250px;
      height: 400px;
    }
  }
  @media (max-width: 767px) {
    img {
      width: 170px;
      height: 225px;
    }
  }
`;
