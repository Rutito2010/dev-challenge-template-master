import React, { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import ByContinent from "./Components/byContinent";
import { ByLanguages } from "./Components/byLanguage";
import { GET_COUNTRIES } from "./Queries/Queries";

const App = () => {
  const { data, error, loading } = useQuery(GET_COUNTRIES);

  const [filter, setFilter] = useState(false);

  const [input, setInput] = useState("");

  const [filteredCountries, setFilteredCountries] = useState();

  const [orderByContintent, setByContintent] = useState();

  const [orderByLanguage, setByLanguage] = useState();

  const handleChange = (e) => {
    e.preventDefault();

    function primeraLetraMayus(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    let keyword = primeraLetraMayus(e.target.value);
    let datita2 = _.filter(data.countries, (country) =>
      country.name.includes(keyword)
    );
    let countries = [];
    for (let i = 0; i < datita2.length; i++) {
      console.log(datita2[i].emojiU);
      let flag = datita2[i].emojiU.replace(
        /\\u[0-9a-fA-F]{4}/g,
        function (a, b) {
          var charcode = parseInt(b, 16);
          return String.fromCharCode(charcode);
        }
      );

      countries.push({
        name: datita2[i].name,
        continent: datita2[i].continent.name,
        languages: datita2[i].languages.map((e) => e.name),
        capital: datita2[i].capital,
        flag: datita2[i].emoji,
        // flag2: datita2[i].emojiU,
        // flag3: flag,
        currency: datita2[i].currency,
        code: datita2[i].code,
      });
    }

    let oContinent = _.keyBy(countries, "continent");
    setByContintent(oContinent);
    // console.log(oContinent);

    let oLanguage = _.castArray(_.keyBy(countries, "languages"));
    setByLanguage(oLanguage);
    // console.log(oLanguage);
    setFilteredCountries(countries);

    setInput(keyword);
  };
  const handleContinent = (e) => {
    e.preventDefault();
    setFilter(true);
  };
  const handleLanguage = (e) => {
    e.preventDefault();
    setFilter(false);
  };

  return (
    <div>
      <h1>Country Search</h1>
      <h4>Introduce your country</h4>
      <input
        placeholder="Introduce al menos dos (2) caracteres para iniciar la busqueda..."
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <h2>Group by :</h2>
      <button
        onClick={(e) => {
          handleContinent(e);
        }}
      >
        Continent
      </button>
      <button
        onClick={(e) => {
          handleLanguage(e);
        }}
      >
        Language
      </button>
      {loading ? (
        <p>Loading Countries</p>
      ) : filter === true ? (
        <ByContinent datita={filteredCountries} />
      ) : (
        <ByLanguages datita={filteredCountries} />
      )}
    </div>
  );
};
export default App;
