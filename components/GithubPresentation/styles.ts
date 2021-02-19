import styled from 'styled-components';

export const Container = styled.div`
  padding: 5rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.3rem;
  margin-bottom: 1.2rem;

  @media(max-width: 1024px) {
    width: 90vw;
  }
`;

export const SocialLinks = styled.div`
  margin-top: 1.5rem;
`;

export const Link = styled.a`
  cursor: pointer;

  transition: color 300ms;

  color: #010101;
  padding: 0.5rem;

  &:hover {
    color: #ff725f;
  }
`;

export const GithubProjectImage = styled.img`


  @media(max-width: 1024px) {
    width: 22rem;
    height: 20rem;

    margin: 1rem;
  }
`;
