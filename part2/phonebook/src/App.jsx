import { useState } from "react";
import  Filter  from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newcontact, setNewContact] = useState({});
  const [search, setSearch] = useState("");

  const handleInput = (event) => {
    const newobj = {...newcontact}
    newobj[event.target.name] = event.target.value;
    setNewContact(newobj);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newcontact.name ||!newcontact.number){
      alert("Please fill in all fields");
      return;
    }else if(persons.find(person => person.name === newcontact.name)){
      alert(`${newcontact.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({...newcontact,id:persons.length+1}));
    setNewContact({name: "", number: "" });
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch}/>
      <PersonForm newcontact={newcontact} handleInput={handleInput} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search}/>
    </div>
  )
}

export default App;