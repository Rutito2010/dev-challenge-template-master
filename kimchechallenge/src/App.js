import React, { useState } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import ByContinent from "./Components/byContinent";
import { ByLanguages } from "./Components/byLanguage";

const GET_LANGUAGES = gql`
  query {
    languages {
      name
    }
  }
`;
const App = () => {
  const { data, error, loading } = useQuery(GET_LANGUAGES);
  const [filter, setFilter] = useState(false);
  // console.log(data);
  return (
    <div>
      <h1>Country Search</h1>
      <h4>Introduce your country</h4>
      <input />
      <h2>Group by :</h2> <button>Continent</button>
      <button>Language</button>
      {loading ? (
        <p>Loading Countries</p>
      ) : filter === true ? (
        // <p>papitas</p>
        <ByContinent />
      ) : (
        <ByLanguages datita={data.languages} />
      )}
      {/* {filter === true ? <div>wd</div> : <div>batatas</div>} */}
    </div>
  );
};
export default App;
