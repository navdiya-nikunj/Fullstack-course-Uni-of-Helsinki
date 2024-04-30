import { useState } from "react";


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInput = (event) => {
    setNewName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newName){
      return;
    }else if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({name:newName}));
    setNewName("");
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person)=>{
        return <p key={person.name}>{person.name}</p>
      })}
    </div>
  )
}

export default App;