import { useState } from "react"

const Filter = ({search,handleSearch}) => {

    return(
        <div>
            Search using Filter: <input type="text" value={search} onChange={handleSearch} />
        </div>
    )

}

export default Filter;