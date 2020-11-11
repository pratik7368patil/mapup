import React from "react";
import "./styling/dataCard.css";

export default function DataCard(props) {
  const { data } = props;
  return (
    // displaing data of current country
    <div className="datacard-main-container">
      <div className="datacard-inner-container">
        <h5>Country Details</h5>
        <h3>Country Name: {data.name}</h3>
        <p>Capital: {data.capital}</p>
        <p>
          Currencies: {data.currencies[0].name} ({data.currencies[0].symbol})
        </p>
        <p>Languages: {data.languages[0].name}</p>
        <p>Timezone: {data.timezones[0]}</p>
        <p>Region: {data.region}</p>
        <p>Subregion: {data.subregion}</p>
        <p>Population: {data.population}</p>
      </div>
    </div>
  );
}
