import { useState } from "react";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
  number: '040-123456' },
  ]) 
  const [newcontact, setNewContact] = useState({})

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
    setPersons(persons.concat(newcontact));
    setNewContact({name: "", number: ""});
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" name="name" value={newcontact.name} onChange={handleInput}/>
          Number: <input type="tel" name="number" value={newcontact.number} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{
        return <p key={person.name}>{person.name} {person.number}</p>
      })}
    </div>
  )
}

export default App;