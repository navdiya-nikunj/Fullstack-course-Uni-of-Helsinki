import { deletePerson } from "../Services/Person";

const Persons = ({ persons, search, onDelete }) => {
  return (
    <div>
      {persons.map((person) => {
        if (!search) {
          return (
            <div key={person.id}>
              <p>
                {person.name} {person.number}
              </p>
              <button
                onClick={() => {
                  onDelete(person);
                }}
              >
                Delete
              </button>
            </div>
          );
        } else if (person.name.toLowerCase().includes(search.toLowerCase())) {
          return (
            <div key={person.id}>
              <p>
                {person.name} {person.number}
              </p>
              <button
                onClick={() => {
                  onDelete(person);
                }}
              >
                Delete
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Persons;
