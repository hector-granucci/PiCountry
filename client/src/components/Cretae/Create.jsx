import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCountries, postActivity } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import valide from './valide';


const Create = () => {
    const dispatch = useDispatch()
    const countriesState = useSelector((state) => state.countries)
    const [errors, setErrors] = useState({})


    const [input, setInput] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countries: []
    })


    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(valide({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleCheck = (e) => {
        const { value, checked } = e.target
        checked &&
            setInput({
                ...input,
                season:  value
            })
        setErrors(valide({
            ...input,
            season: value
        }))
        !checked &&
            setInput({
                ...input,
                season: ""
            })
        setErrors(
            valide({
                ...input,
                season: [value]
            })
        )
    }



    const handleSelect = (e) => {
        setInput({
            ...input,
            countries: [...input.countries, e.target.value]
        })
        setErrors(valide({
            ...input,
            countries: e.target.value
        }))
    }

    const handleDelete = (el) => {
        setInput({
            ...input,
            countries: input.countries.filter(coun => coun !== el)
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(input))
        alert("activity Creado")
        setInput({
            name: "",
            difficulty: 0,
            duration: 0,
            season: "",
            countries: []
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
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input
                        type="number"
                        value={input.difficulty}
                        name="difficulty"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.difficulty && (
                        <p>{errors.difficulty}</p>
                    )}
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                        type="number"
                        value={input.duration}
                        name="duration"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.duration && (
                        <p>{errors.duration}</p>
                    )}
                </div>
                <div>
                    <span>Season:</span>
                    <div key={"verano"}>
                        <label htmlFor='Verano'>Verano</label>
                        <input
                            id="Verano"
                            type="checkbox"
                            name='Verano'
                            value="Verano"
                            onChange={(e) => handleCheck(e)}
                        />
                    </div>
                    <div key={"otoño"}>
                        <label htmlFor='Otoño'>Otoño</label>
                        <input
                            id="Otoño"
                            type="checkbox"
                            name='Otoño'
                            value="Otoño"
                            onChange={(e) => handleCheck(e)}
                        />
                    </div>
                    <div key={"primevera"}>
                        <label htmlFor='Primavera'>Primavera</label>
                        <input
                            id="Primavera"
                            type="checkbox"
                            name='Primavera'
                            value="Primavera"
                            onChange={(e) => handleCheck(e)}
                        />
                    </div>
                    <div key={"invierno"}>
                        <label htmlFor='Invierno'>Invierno</label>
                        <input
                            id="Invierno"
                            type="checkbox"
                            name='Invierno'
                            value="Invierno"
                            onChange={(e) => handleCheck(e)}
                        />
                    </div>
                    {errors.season && (
                        <p>{errors.season}</p>
                    )}
                </div>
                <div>
                    <select onChange={(e) => handleSelect(e)}>
                        {countriesState.map((count) => (
                            <option value={count.name}>{count.name}</option>
                        ))}
                    </select>
                    {errors.countries && (
                        <p>{errors.countries}</p>)}
                </div>
                <button type='submit'>Create</button>
            </form>
            {input.countries.map((el) =>
                <div>
                    <p>{el}</p>
                    <button onClick={() => handleDelete(el)}>X</button>
                </div>
            )}
        </div>
    )
}

export default Create