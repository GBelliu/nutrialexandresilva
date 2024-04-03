import { Container, Content, ContentSlide, ImageItem } from "./styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export function Metodologia() {
  return (
    <Container>
      <Content>
        <h1>
          COMO MEMBRO DA <span>MENTÓRIA COLSUTÓRIO PRIME</span> VOCÊ RECEBE...
        </h1>
        <ContentSlide>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            centeredSlides={true}
            className="swiperBeTheNumberOne"
            breakpoints={{
              1024: {
                centeredSlides: false,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <ImageItem>
                <img src="bonusrede.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="bonusmarketing.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="bonusplanilha.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="moduloi.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="moduloii.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="moduloiii.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="moduloiv.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="modulov.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="modulovi.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="modulovii.png" alt="" />
              </ImageItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageItem>
                <img src="moduloviii.png" alt="" />
              </ImageItem>
            </SwiperSlide>
          </Swiper>
        </ContentSlide>
      </Content>
    </Container>
  );
}
