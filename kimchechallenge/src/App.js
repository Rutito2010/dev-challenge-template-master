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
      countries.push({
        name: datita2[i].name,
        continent: datita2[i].continent.name,
        languages: datita2[i].languages.map((e) => e.name),
        capital: datita2[i].capital,
        flag: datita2[i].emoji,
        currency: datita2[i].currency,
        code: datita2[i].code,
      });
    }
    let language = [];
    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < countries[i].languages.length; j++)
        language.push(countries[i].languages[j]);
      // console.log(languageList);
    }
    let languageList = _.uniq(language);
    let lanAux = [];
    for (let i = 0; i < languageList.length; i++)
      lanAux.push({ name: languageList[i], countries: [] });
    for (let i = 0; i < lanAux.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (countries[j].languages.includes(lanAux[i].name))
          lanAux[i].countries.push(countries[j]);
      }
    }
    let continents = [];
    for (let i = 0; i < countries.length; i++) {
      continents.push(countries[i].continent);
    }
    let continentList = _.uniq(continents);
    let contAux = [];
    for (let i = 0; i < continentList.length; i++)
      contAux.push({ name: continentList[i], countries: [] });
    for (let i = 0; i < contAux.length; i++) {
      for (let j = 0; j < countries.length; j++) {
        if (countries[j].continent.includes(contAux[i].name))
          contAux[i].countries.push(countries[j]);
      }
    }
    console.log(contAux);
    setByLanguage(lanAux);
    setByContintent(contAux);
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
        <ByContinent datita={orderByContintent} />
      ) : (
        <ByLanguages datita={orderByLanguage} />
      )}
    </div>
  );
};
export default App;
