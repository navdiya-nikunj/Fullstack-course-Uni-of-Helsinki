const Persons = ({persons , search}) => {
    
    return(
        <div>
        {persons.map((person)=>{
            if(!search){
                return <p key={person.name}>{person.name} {person.number}</p>
            }else if(person.name.toLowerCase().includes(search.toLowerCase())){
                return <p key={person.name}>{person.name} {person.number}</p>
            }
        })}
    </div>
          
    )
}
export default Persons;