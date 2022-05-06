import React from "react";
import "./byContinent.css";
// import _ from "lodash";

const ByContinent = ({ datita }) => {
  // const { data, error, loading } = useQuery(GET_CONTINENTS);
  // console.log(data);

  if (datita === null || datita === undefined) {
    return <div> Waiting for keywords...</div>;
  } else {
    return (
      <div>
        {datita.map((con) => (
          <ul key={con.name}>
            <h1>{con.name}</h1>
            {con.countries.map((c) => (
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
                  <h4>Languages: {c.languages.join(" - ")}</h4>
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

export default ByContinent;
