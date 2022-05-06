import React from "react";

// import _ from "lodash";

const ByContinent = ({ datita }) => {
  // const { data, error, loading } = useQuery(GET_CONTINENTS);
  // console.log(data);

  if (datita === null || datita === undefined) {
    return <div> Waiting for keyswords...</div>;
  } else {
    return (
      <div>
        <p>Country List by Continent</p>
        {datita.map((con) => (
          <ul key={con.name}>
            <h2>-{con.name}</h2>
            {con.countries.map((c) => (
              <div key={c.name}>
                <span role="img" aria-label="arrow">
                  {c.flag}
                </span>
                <h3>{c.name}</h3>
                <h4>{c.capital}</h4>
                <h4>{c.languages.join(" - ")}</h4>
                <h4>{c.currency}</h4>
              </div>
            ))}
          </ul>
        ))}
      </div>
    );
  }
};

export default ByContinent;
