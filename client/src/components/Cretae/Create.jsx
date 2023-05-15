import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { getCountries, postActivity } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';


 const  Create = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)


    const [input, setInput] = useState({
        name: "",
        difficulty: 3,
        duration: 0,
        season:"",
        countrie:[]
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleCheck= (e) => {
        if(e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            })
        }
    }

    const handleSelect = (e) => {
        setInput({
           ...input,
           countrie: [...input.countrie,e.target.value]
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch( postActivity(input))
        alert("activity Creado")
        setInput({
                name: "",
                difficulty: 3,
                duration: 0,
                season:"",
                countrie:[]
        })
    }




    useEffect(() => {
        dispatch(getCountries());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Link to="/home"><button>HOME</button></Link>
            <h1>Create Activity</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                    type="text"
                    value={input.name} 
                    name="name"
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                 <div>
                    <label>Difficulty:</label>
                    <input 
                    type="number"
                    value={input.difficulty} 
                    name="difficulty"
                    defaultValue={3}
                    onChange={(e)=>handleChange(e)}
                    />
                </div> 
                <div>
                    <label>Duration:</label>
                    <input 
                    type="number"
                    value={input.duration} 
                    name="duration"
                    onChange={(e)=>handleChange(e)}
                    />
                </div>
                <div>
                    <label>Season:</label>
                    <label><input
                     type="checkbox" 
                     name='Verano'
                     value="Verano"
                     onChange={(e)=>handleCheck(e)}
                     />Verano</label>  
                     <label><input
                     type="checkbox" 
                     name='Otoño'
                     value="Otoño"
                     onChange={(e)=>handleCheck(e)}
                     />Otoño</label> 
                     <label><input
                     type="checkbox" 
                     name='Primavera'
                     value="Primavera"
                     onChange={(e)=>handleCheck(e)}
                     />Primavera</label>
                     <label><input
                     type="checkbox" 
                     name='Invierno'
                     value="Invierno"
                     onChange={(e)=>handleCheck(e)}
                     />Invierno</label>                      
                </div>
                <div>
                <select onChange={(e)=>handleSelect(e)}>
                    {countries.map((count) => (
                        <option value={count.name}>{count.name}</option>
                    ))}
                </select>
                </div>
                <div>
                <ul><li>{input.countrie.map(el => el + ",")}</li></ul>
                </div>
                <button type='submit'>Create</button> 
            </form>
        </div>
    )
}

export default Create