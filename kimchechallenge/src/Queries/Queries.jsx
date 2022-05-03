import { gql } from "apollo-boost";

export const GET_CONTINENTS = gql`
  query {
    continents {
      name
      code
      countries {
        name
        code
        capital
        emoji
        languages {
          name
        }
      }
    }
  }
`;
export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      capital
      emoji
      continent {
        name
      }
      languages {
        name
        code
      }
    }
  }
`;
export const GET_LANGUAGES = gql`
  query {
    languages {
      name
    }
  }
`;

// export { GET_CONTINENTS, GET_COUNTRIES, GET_LANGUAGES };
