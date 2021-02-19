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
  width: 20rem;
  height: 20rem;

  margin-top: 2.4rem;

  z-index: 0;

  @media (max-width: 1024px) {
      display: none;
  }
`;
