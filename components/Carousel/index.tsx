import { ReactElement } from "react";
import SwiperCore, {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper";
import { Swiper } from "swiper/react";
import { SwiperContainer } from "./style";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

interface CarouselProps {
  children: ReactElement | ReactElement[];
}

export default function Carousel({ children, ...props }: CarouselProps) {
  return (
    <SwiperContainer>
      <Swiper
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        effect={"fade"}
        {...props}
      >
        {children}
      </Swiper>
    </SwiperContainer>
  );
}

export { SwiperSlide as CarouselSlide } from "swiper/react";
