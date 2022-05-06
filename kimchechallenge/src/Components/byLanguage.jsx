import React from "react";

export const ByLanguages = ({ datita }) => {
  // const { data, error, loading } = useQuery(GET_LANGUAGES);
  // console.log(datita);

  if (datita === null || datita === undefined) {
    return <div> Waiting for keyswords...</div>;
  } else {
    return (
      <div>
        <p>Country List by Language</p>
        {datita.map((lan) => (
          <ul key={lan.name}>
            <h2>-{lan.name}</h2>
            {lan.countries.map((c) => (
              <div key={c.name}>
                <span role="img" aria-label="arrow">
                  {c.flag}
                </span>
                <h3>{c.name}</h3>
                <h4>{c.capital}</h4>
                <h4>{c.continent}</h4>
                <h4>{c.currency}</h4>
              </div>
            ))}
          </ul>
        ))}
      </div>
    );
  }
};
