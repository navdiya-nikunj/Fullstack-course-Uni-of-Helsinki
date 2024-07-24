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
  const length: number = countries.length;
  if (length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (length === 1) {
    return <CountryDetails countryname={countries[0].name.common} />;
  } else {
    return countries.map((country: any) => {
      return <p>{country.name.common}</p>;
    });
  }
};
export default FilteredCountriesList;
