import React from "react";

import { gql, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../Queries/Queries";

export const ByLanguages = ({ datita }) => {
  const { data, error, loading } = useQuery(GET_COUNTRIES);
  //   console.log(datita);

  if (data === null || data === undefined) {
    return <div></div>;
  } else {
    // let Idioma = { lan: "", countries: [] };
    // let Idioma = { lan:{name: "", countries: [] },lan:{name: "", countries: [] }};
    return (
      <div>
        <p>Country List by Language</p>
        {
          (console.log(data.countries),
          datita.map((l) => (
            <ul key={l.code}>
              <h4>{l.name}</h4>
              {
                data.countries ? (
                  data.countries
                    .filter((e) =>
                      e.languages.map((lan) => {
                        if (lan.name === l.name) {
                          console.log(e.code, lan.code);
                        }
                      })
                    )
                    .map((c) => <ul>{c.name}</ul>)
                ) : (
                  <p>no esta</p>
                )
                //   l.name === c.languages ? <p>{c.name}</p> : <p></p>
              }
            </ul>
          )))
        }
      </div>
    );
  }
};

// export default ByLanguages
