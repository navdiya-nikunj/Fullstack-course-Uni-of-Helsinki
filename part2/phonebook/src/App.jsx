import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { getPersons, addPerson } from "./Services/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newcontact, setNewContact] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPersons().then((personList) => setPersons(personList));
  }, []);

  const handleInput = (event) => {
    const newobj = { ...newcontact };
    newobj[event.target.name] = event.target.value;
    setNewContact(newobj);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newcontact.name || !newcontact.number) {
      alert("Please fill in all fields");
      return;
    } else if (persons.find((person) => person.name === newcontact.name)) {
      alert(`${newcontact.name} is already added to phonebook`);
      return;
    }
    addPerson(newcontact).then((addedPerson) =>
      setPersons(persons.concat(addedPerson))
    );

    setNewContact({ name: "", number: "" });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <h2>Add Phone number</h2>
      <PersonForm
        newcontact={newcontact}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} />
    </div>
  );
};

export default App;
