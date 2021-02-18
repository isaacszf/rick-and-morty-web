import { GetStaticProps, GetStaticPaths } from 'next';

// GraphQL
import client from '../graphql/client';
import GET_LANDING_PAGE from '../graphql/queries/getLandingPage';

import { LandingPageProps } from '../types/api';

import Showcase from '../components/Showcase';
import Header from '../components/Header';
import GithubPresentation from '../components/GithubPresentation';

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE);

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
  }

  shuffleArray(landingPage.characters);

  return {
    props: {
      ...landingPage,
    }
  }
}

const Home = ({ title, characters, image, description, GithubPresentation }: LandingPageProps) => {
  return (
    <>
      <Header title={title} description={description} image={image} />
      <Showcase characters={characters} />
      <GithubPresentation {...GithubPresentation} />
    </>
  )
}

export default Home;
