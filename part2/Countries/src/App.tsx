import { useEffect, useState } from "react";
import "./App.css";
import { getAllCountries } from "./services/countries";
import FilteredCountriesList from "./components/FileteredCountriesList";

interface Country {
  name: {
    common: string;
  };
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState("");

  function filterCountries(): Country[] {
    if (search === "") {
      return [];
    }
    return countries.filter((country: any) => {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    });
  }

  useEffect(() => {
    getAllCountries().then((data: []) => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <div>
        <label htmlFor="search">Search Country:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      <FilteredCountriesList countries={filterCountries()} />
    </>
  );
}

export default App;
