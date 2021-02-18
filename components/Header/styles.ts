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
  padding: 15rem;
  text-align: center;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media(max-width: 1024px) {
    padding: 5rem;

    h1, h3 {
      width: 90vw;
    }
  }
`;

export const Logo = styled.img`
  display: none;

  position: absolute;
  top: 25%;
  left: -7%;

  width: 45rem;
  height: 25rem;

  animation: ${movingAnimation} 5s infinite;

  z-index: 0;

  @media (max-width: 1024px) {
      display: none;
  }
`;
