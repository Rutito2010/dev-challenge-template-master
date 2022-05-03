import React, { useState } from "react";
import "./App.css";

import { gql, useQuery } from "@apollo/client";
const GET_COUNTRIES = gql`
  query {
    continents {
      name
      countries {
        name
      }
    }
  }
`;
const App = () => {
  const { data, error, loading } = useQuery(GET_COUNTRIES);
  const [filter, setFilter] = useState(true);
  console.log(data);
  // const Continent= render(){ return(<div>
  //         <p>Country List by Continent</p>
  //         {data.continents.map((e) => (
  //           <ul key={e.name}>{e.name}</ul>
  //         ))}</div>)
  // };
  return (
    <div>
      <h1>Country Search</h1>
      <h4>Introduce your country</h4>
      <input />
      <h2>Group by :</h2> <button>Continent</button>
      <button>Language</button>
      {loading ? (
        <p>Loading Countries</p>
      ) : (
        <>
          <p>Country List by Continent</p>
          {data.continents.map((e) => (
            <ul key={e.name}>{e.name}</ul>
          ))}
        </>
      )}
      {/* {filter === true ? <div>wd</div> : <div>batatas</div>} */}
    </div>
  );
};
export default App;
