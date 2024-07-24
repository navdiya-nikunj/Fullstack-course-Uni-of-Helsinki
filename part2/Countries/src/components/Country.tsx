import { useEffect, useState } from "react";
import { getCountry } from "../services/countries";

interface Country {
  name: {
    common: string;
  };
  capital: String[];
  area: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  languages: {};
}

interface CountryProps {
  countryname: string;
}
const CountryDetails = ({ countryname }: CountryProps) => {
  const [country, setCountry] = useState<Country | null>(null);
  useEffect(() => {
    getCountry(countryname).then((data: Country) => {
      setCountry(data);
    });
    console.log(country);
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
    </div>
  );
};
export default CountryDetails;
