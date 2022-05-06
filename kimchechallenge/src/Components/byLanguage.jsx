import React from "react";

import { useQuery } from "@apollo/client";
import { GET_LANGUAGES } from "../Queries/Queries";

export const ByLanguages = ({ datita }) => {
  const { data, error, loading } = useQuery(GET_LANGUAGES);
  // console.log(datita);

  if (data === null || datita === undefined) {
    return <div> Waiting for keyswords...</div>;
  } else {
    return (
      <div>
        <p>Country List by Language</p>
        {datita.map((c) => (
          <ul key={c.name}>
            <span role="img" aria-label="arrow">
              {c.flag}
            </span>
            <h2>{c.name}</h2>
            <h4>{c.capital}</h4>
            <h4>{c.currency}</h4>
          </ul>
        ))}
      </div>
    );
  }
};
