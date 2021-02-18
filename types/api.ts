export type Character = {
  id: string;
  name: string;
  status: string;
  race: {
    name: string;
  };
  image: {
    url: string;
    alternativeText: string;
  };
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  occupations: {
    id: string;
    name: string;
  }[];
};

export type LandingPageProps = {
  title: string;
  description: string;
  image: {
    url: string;
  };
  characters: Character[];
  GithubPresentation: {
    title: string;
    image: {
      url: string;
    };
  }
};
