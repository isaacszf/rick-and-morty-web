const GET_LANDING_PAGE = /* GraphQL */ `
fragment characterInfo on LandingPage {
  characters {
    id
    name
    status
    race {
      name
    }
    image {
      url
      alternativeText
    }
    origin {
      name
    }
    location {
      name
    }
    occupations {
      id
      name
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    title
    ...characterInfo
  }
}
`;

export default GET_LANDING_PAGE;
