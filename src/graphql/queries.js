import { gql } from "@apollo/client";

export const city_query = gql`

query getCityByName($name: String!) {
    getCityByName(name: $name) {
    name
    country
    id
    coord {
      lat
      lon
    }
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
    }
  }
}
`;
