import React from 'react';
import { FaSkull, FaHeart, FaQuestionCircle, FaCircle, FaTools } from 'react-icons/fa';

import * as S from './styles';

import { getImageUrl } from '../../utils/getImageUrl';
import { Character } from '../../types/api';

type Props = {
  characters: Character[];
};

enum Icons {
  Skull = (<FaSkull size={19} color="#f08484"/>),
  Heart = (<FaHeart size={19} color="#7bc784"/>),
  Question = (<FaQuestionCircle size={19} color="gray"/>),
  ExtantCircle = (<FaCircle size={19} color="aqua"/>),
  Tool = (<FaTools size={19} color="brown"/>)
}

const statusWithIcons = (status: string) => {
  switch (status) {
    case 'Alive': {
      return Icons["Heart"];
    }

    case 'Deceased': {
      return Icons["Skull"];
    }

    case 'Unknown': {
      return Icons["Question"];
    }

    case 'Extant': {
      return Icons["ExtantCircle"];
    }

    case 'Deactivated': {
      return Icons["Tool"];
    }

    default: {
      return status;
    }
  }
};

const Showcase = ({ characters }: Props) => {
  return (
    <S.Wrapper>
      <S.CharacterInfo>
        {characters.slice(0, 6).map((
          {
            id,
            name,
            image,
            status, race,
            origin,
            location,
            occupations
          }) => {
          return (
            <S.CharacterArticle key={id}>
              <S.CharacterImageContainer>
                <S.CharacterImage src={getImageUrl(image.url)} alt={image.alternativeText}/>
              </S.CharacterImageContainer>

              <S.CharacterGeneralInfo>
                <h2>{name}</h2>

                <S.CharacterProps>
                  <p>{statusWithIcons(status)} - {status}</p>
                  <span><strong>Species:</strong> {race.name}</span>
                  <span><strong>Place of Origin:</strong> {origin ? origin.name : 'Unknown'} </span>
                  <span><strong>Last Seen:</strong> {location ? location.name : 'Not Found'} </span>
                  <span><strong>Occupations:</strong><ul>
                          {
                            occupations.map(({id, name}) => {
                              return (
                                <li key={id}>{name}</li>
                              );
                            })
                          }
                        </ul></span>
                </S.CharacterProps>
              </S.CharacterGeneralInfo>
            </S.CharacterArticle>
          );
        })}
      </S.CharacterInfo>
    </S.Wrapper>
  );
};

export default Showcase;
