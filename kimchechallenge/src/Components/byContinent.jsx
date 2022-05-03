import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../Queries/Queries";
// const GET_CONTINENTS = gql`
//   query {
//     continents {
//       name
//       code
//       countries {
//         name
//         code
//         capital
//         emoji
//         languages {
//           name
//         }
//       }
//     }
//   }
// `;
const ByContinent = ({}) => {
  const { data, error, loading } = useQuery(GET_CONTINENTS);
  console.log(data);

  return (
    <div>
      <p>Country List by Continent</p>
      {loading ? (
        <p>Loading Countries...</p>
      ) : (
        <>
          {data.continents.map((e) => (
            <ul key={e.code}>
              {e.name}{" "}
              {e.countries.map((c) => (
                <li key={c.code}>
                  <div>
                    Country: {c.name} {"  "}
                    Capital: {c.capital}
                  </div>
                </li>
              ))}{" "}
            </ul>
          ))}
        </>
      )}
    </div>
  );
};

export default ByContinent;
