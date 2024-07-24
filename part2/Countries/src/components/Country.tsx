import { useEffect, useState } from "react";
import { getCountry } from "../services/countries";
import { getWeather } from "../services/weather";

interface Country {
  name: {
    common: string;
  };
  capital: string[];
  area: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: {};
}

interface Weather {
  main: {
    temp: number;
  };
  weather: { icon: string }[];
  wind: {
    speed: number;
  };
}

interface CountryProps {
  countryname: string;
}
const CountryDetails = ({ countryname }: CountryProps) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  useEffect(() => {
    getCountry(countryname).then((data: Country) => {
      setCountry(data);
      getWeather(data.capital[0]).then((data: any) => {
        setWeather(data);
      });
    });
  }, []);
  if (country === null) {
    return null;
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area}</p>
      <h3>Lannguages</h3>
      <ul>
        {Object.values(country.languages).map((language: any) => {
          return (
            <>
              <p key={language}>👉 {language}</p>
            </>
          );
        })}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      {weather !== null ? (
        <div>
          <h2>Weather in {country.capital[0]}</h2>
          <p>Temperature: {weather.main.temp}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <p>Wind: {weather.wind.speed}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};
export default CountryDetails;
