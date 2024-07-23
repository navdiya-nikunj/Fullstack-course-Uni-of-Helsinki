import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import {
  getPersons,
  addPerson,
  deletePerson,
  updatePerson,
} from "./Services/Person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newcontact, setNewContact] = useState({});
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState({
    msg: "",
    type: "",
  });

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
    const personExist = persons.find(
      (person) => person.name === newcontact.name
    );
    if (!newcontact.name || !newcontact.number) {
      alert("Please fill in all fields");
      return;
    } else if (personExist) {
      const cnf = window.confirm(
        `${personExist.name} is already added to phonebook. Replace the old number with new number?`
      );
      if (cnf) {
        updatePerson(personExist.id, {
          ...personExist,
          number: newcontact.number,
        }).then((updatedPerson) => {
          setPersons(
            persons.map((per) => {
              if (per.id === personExist.id) {
                return updatedPerson;
              }
              return per;
            })
          );
          setNotification({
            msg: `${updatedPerson.name} is updates`,
            type: "update",
          });
          setTimeout(() => {
            setNotification({ msg: "", type: "" });
          }, 2000);
        });
      }
      setNewContact({ name: "", number: "" });
      return;
    }
    addPerson(newcontact).then((addedPerson) => {
      setPersons(persons.concat(addedPerson));
      setNotification({ msg: `${addedPerson.name} is added`, type: "success" });
      setTimeout(() => {
        setNotification({ msg: "", type: "" });
      }, 2000);
    });

    setNewContact({ name: "", number: "" });
  };

  const handleDelete = (person) => {
    const res = window.confirm(
      `Are you sure you want to delete ${person.name}`
    );
    if (res) {
      deletePerson(person.id)
        .then((res) => {
          const newList = persons.filter((pers) => pers.id != person.id);
          setPersons(newList);
          setNotification({ msg: `${person.name} is deleted`, type: "error" });
          setTimeout(() => {
            setNotification({ msg: "", type: "" });
          }, 2000);
        })
        .catch((e) => {
          console.log(e.request);
          setNotification({
            msg: `${person.name} is already deleted`,
            type: "error",
          });
          setTimeout(() => {
            setNotification({ msg: "", type: "" });
          }, 2000);
        });
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification msg={notification.msg} type={notification.type} />
      <Filter search={search} handleSearch={handleSearch} />
      <h2>Add Phone number</h2>
      <PersonForm
        newcontact={newcontact}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} onDelete={handleDelete} />
    </div>
  );
};

export default App;
