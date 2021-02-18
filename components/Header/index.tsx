import React from 'react';
import * as S from './styles';

import { getImageUrl } from '../../utils/getImageUrl';

type Props = {
  title: string;
  description: string;
  image: {
    url: string;
  };
};

const Header = ({ title, description, image }: Props) => {
  return (
    <S.Heading>
      <h1>{title}</h1>
      <h3>{description}</h3>

      <S.Logo src={getImageUrl(image.url)} alt="Rick and Morty"/>
    </S.Heading>
  );
};

export default Header;
