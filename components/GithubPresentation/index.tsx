import { FaGithub } from 'react-icons/fa';

import * as S from './styles';
import { getImageUrl } from '../../utils/getImageUrl';

type Props = {
  title: string;
  image: {
    url: string;
  };
};

const GithubPresentation = ({ title, image }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.GithubProjectImage src={getImageUrl(image.url)} alt="Github Project Image" />

      <S.SocialLinks>
        <S.Link href="https://github.com/IkeSZ/RickAndMortyProject-FullStack" target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></S.Link>
      </S.SocialLinks>
    </S.Container>
  );
};

export default GithubPresentation;
