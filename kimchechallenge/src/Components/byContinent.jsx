import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import { GET_CONTINENTS } from "../Queries/Queries";

const ByContinent = ({ datita }) => {
  const { data, error, loading } = useQuery(GET_CONTINENTS);
  // console.log(data);

  if (data === null || datita === undefined) {
    return <div> Waiting for keyswords...</div>;
  } else {
    return (
      <div>
        <p>Country List by Continent</p>
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

export default ByContinent;
