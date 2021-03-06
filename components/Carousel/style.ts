import styled, { css } from "styled-components";

export const SwiperContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 75vh;
    background-color: ${theme.palette.inverseBackground};

    .swiper {
      width: 100%;
      height: 100%;
      color: #fff;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: ${theme.palette.accent};
    }

    .swiper-button-prev {
      left: 3rem;
    }

    .swiper-button-next {
      right: 3rem;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }

    .swiper-slide > div {
      display: block;
      width: 100%;
    }

    .swiper-slide img {
      object-fit: cover;
    }

    .swiper-pagination-bullet-active {
      background: ${theme.palette.accent};
    }

    @media (max-width: 600px) {
      .swiper-button-prev {
        left: 1rem;
      }

      .swiper-button-next {
        right: 1rem;
      }
    }
  `}
`;
