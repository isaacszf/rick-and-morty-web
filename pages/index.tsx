import { GetStaticProps } from 'next';

// GraphQL
import client from '../graphql/client';
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage';

import { LandingPageProps } from '../types/api';

import Character from '../components/CharacterContainer';

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  return {
    props: {
      ...landingPage
    }
  }
}

const Home = ({ title, characters }: LandingPageProps) => {
  return (
    <Character title={title} characters={characters} />
  )
}

export default Home;
