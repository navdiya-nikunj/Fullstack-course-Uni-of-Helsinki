const PersonForm = ({newcontact,handleInput,handleSubmit})=> {
    return(
        <div>
            <form onSubmit={handleSubmit} >
            <div>
          name: <input type="text" name="name" value={newcontact.name} onChange={handleInput}/>
          Number: <input type="tel" name="number" value={newcontact.number} onChange={handleInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
            </form>
        </div>
    )
}
export default PersonForm;