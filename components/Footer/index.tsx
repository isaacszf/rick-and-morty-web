import { FaTwitterSquare, FaGithubSquare, FaCheckSquare } from 'react-icons/fa';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.SocialLinks>
        <a href="https://github.com/IkeSZ" rel="noopener noreferrer" target="_blank"><FaGithubSquare size={80} /></a>
        <a href="https://twitter.com/IkeSZxx" rel="noopener noreferrer" target="_blank"><FaTwitterSquare size={80} /></a>
        <a href="https://linktr.ee/ikesz" rel="noopener noreferrer" target="_blank"><FaCheckSquare size={80} /></a>
      </S.SocialLinks>

      <S.Author>Powered by <a
        href="https://github.com/IkeSZ"
        rel="noopener noreferrer"
        target="_blank">IkeSZ</a>
      </S.Author>
    </S.Footer>
  );
};

export default Footer;
