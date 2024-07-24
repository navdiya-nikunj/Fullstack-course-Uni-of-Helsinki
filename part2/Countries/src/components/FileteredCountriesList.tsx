import { useEffect, useState } from "react";
import CountryDetails from "./Country";

interface FilteredCountriesListProps {
  countries: Country[];
}
interface Country {
  name: {
    common: string;
  };
}

const FilteredCountriesList = ({ countries }: FilteredCountriesListProps) => {
  const [showCountry, setShowCountry] = useState<string | null>(null);
  useEffect(() => {
    setShowCountry(null);
  }, [countries]);

  const length: number = countries.length;
  if (length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (length === 1) {
    return <CountryDetails countryname={countries[0].name.common} />;
  } else if (showCountry !== null) {
    return <CountryDetails countryname={showCountry} />;
  } else {
    return countries.map((country: any) => {
      return (
        <div>
          <span>{country.name.common} </span>
          <button
            onClick={() => {
              setShowCountry(country.name.common);
            }}
          >
            Show
          </button>
        </div>
      );
    });
  }
};
export default FilteredCountriesList;
