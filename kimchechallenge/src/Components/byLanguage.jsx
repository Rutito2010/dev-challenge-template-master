import React from "react";
import "./byContinent.css";

export const ByLanguages = ({ datita }) => {
  // const { data, error, loading } = useQuery(GET_LANGUAGES);
  // console.log(datita);

  if (datita === null || datita === undefined) {
    return <div> Waiting for keywords...</div>;
  } else {
    return (
      <div>
        {datita.map((lan) => (
          <ul key={lan.name}>
            <h1>{lan.name}</h1>
            {lan.countries.map((c) => (
              <div key={c.name} className="Cards">
                <div className="cardTilte">
                  <h2>
                    <span className="flag" role="img" aria-label="arrow">
                      {c.flag}
                    </span>
                    {"   "}
                    {c.name}
                  </h2>
                </div>
                <div className="info">
                  <h4>Capital: {c.capital}</h4>
                  <h4>Continent: {c.continent}</h4>
                  <h4>Currency: {c.currency}</h4>
                </div>
              </div>
            ))}
          </ul>
        ))}
      </div>
    );
  }
};
