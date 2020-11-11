import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import axios from "axios";

export default function App() {
  const [currentCountry, setCurrentCountry] = React.useState("IND");
  const [countryData, setCountryData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  // making request to server to get data of current country
  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      let url = `https://restcountries.eu/rest/v2/alpha/${currentCountry}`;
      const result = await axios(url);
      setCountryData(result);
      setLoading(false);
    }
    getData();
  }, [currentCountry]);

  function getUserInput(country) {
    setCurrentCountry(country);
  }

  return (
    <div className="app-container">
      <NavBar />
      {isLoading ? (
        "Loading..."
      ) : (
        <Map getUserInput={getUserInput} countryData={countryData} />
      )}
    </div>
  );
}
