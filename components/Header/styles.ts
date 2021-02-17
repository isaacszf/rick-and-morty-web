import styled, { keyframes } from "styled-components";

const movingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Heading = styled.header`
  padding: 5rem;
  text-align: center;
`;

export const Logo = styled.img`
  position: absolute;
  top: -10%;
  left: -7%;

  width: 45rem;
  height: 25rem;

  animation: ${movingAnimation} 5s infinite;

  z-index: 0;

  @media (max-width: 1024px) {
      display: none;
  }
`;
