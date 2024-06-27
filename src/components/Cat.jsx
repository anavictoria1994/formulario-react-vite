import { useState } from "react";

const Cat = () =>{

    const [cat, setCat] = useState({
        name: 'Dexter',
        year: 5,
    })
    
    const handledClick = () => {
        //setCat ({...cat, year: cat.year +1})
        setCat((prev) => ({...prev, year: cat.year + 1}))
    };

    return(
        <>
        <h2> {cat.name} - {cat.year} </h2>
        <button onClick={handledClick} className="btn btn-dark mb-2"> UPDATE YEAR</button>
        </>
    )
}

export default Cat;