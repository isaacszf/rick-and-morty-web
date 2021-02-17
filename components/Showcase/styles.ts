import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px) skewY(-3deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) skewY(-3deg);
  }
`;

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

export const Wrapper = styled.div`
  h1 {
    text-align: center;
  }

  font-size: 1.1rem;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 1.5rem;

  background: #383838;
  transform: skewY(3deg);
`;

export const CharacterArticle = styled.article`
  display: flex;

  width: 47.01%;
  border-radius: 0.5rem;

  margin: 1.5rem;
  padding: 0.8rem;

  background: #4a4a49;
  color: #eee;

  box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);

  transform: skewY(-3deg);
  animation: ${appearFromTop} 1s;
`;

export const CharacterImageContainer = styled.div``;

export const CharacterImage = styled.img`
  width: 18rem;
  height: 18rem;

  border-radius: 0.5rem;
  transform: skewY(0deg);
`;

export const CharacterGeneralInfo = styled.div`
  display: block;
  margin-left: 1.5rem;

  h2 {
    margin-bottom: 0.5rem;
    transform: skewY(-3deg);
  }

  transform: skewY(3deg);
`;

export const CharacterProps = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 0.8rem;
  }

  span {
    margin-bottom: 0.5rem;

    ul {
      margin: 0.4rem 0 0 1.5rem;
      list-style: none;

      li::before {
        content: "\\2022";
        color: #FF725F;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  transform: skewY(-3deg);
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
`;
