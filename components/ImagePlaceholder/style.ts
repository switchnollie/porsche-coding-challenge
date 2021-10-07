// adapted and ported to React from https://codepen.io/0xfa1l/pen/zyOGGy
import styled, { keyframes } from "styled-components";

const ShineKeyframes = keyframes`
  0% {
      background-position: 0% 0%;
  }
  100% {
      background-position: -135% 0%;
  }
`;

export const Curtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Shine = styled.div`
  width: 100%;
  height: 100%;
  transition: 0.3s;
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  animation: ${ShineKeyframes} 1.3s infinite;
  opacity: 0.8;
`;
