import { GetStaticProps, GetStaticPaths } from 'next';

// GraphQL
import client from '../graphql/client';
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage';

import { LandingPageProps } from '../types/api';

import Showcase from '../components/Showcase';
import Header from '../components/Header';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(landingPage.characters);

  return {
    props: {
      ...landingPage,
    }
  }
}

const Home = ({ title, characters, image, description }: LandingPageProps) => {
  return (
    <>
      <Header title={title} description={description} image={image} />
      <Showcase characters={characters} />
    </>
  )
}

export default Home;
