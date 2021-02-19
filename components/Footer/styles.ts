import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 7rem;
  box-shadow: 0.1rem 0.1rem 0.7rem 0.4rem rgba(0, 0, 0, 0.1);

  background: linear-gradient(to right, #383838, #303030);
  border: 1px solid #010101;
`;

export const Author = styled.p`
  color: #fafafa;

  text-align: center;

  a {
    text-decoration: none;
    border-bottom: 0.1rem solid #FF725F;

    color: #fafafa;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;

  svg {
    padding: 1rem;
    color: #fafafa;

    transition: color 300ms;

    &:hover {
      color: #c9c9c9;
    }
  }
`;
