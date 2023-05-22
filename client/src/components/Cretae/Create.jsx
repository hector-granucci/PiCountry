import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getCountries, postActivity } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import valide from './valide';
import style from "./create.module.css"


const Create = () => {
    const dispatch = useDispatch()
    const countriesState = useSelector((state) => state.countries)
    const activity = useSelector(state => state.activities)
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
                season: value
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
        let algo = []
        let variable = activity.map(element => {
            if (element.name === input.name) {
                algo.push(element.name)
            }
        });
        if (algo.length < 1) {
            dispatch(postActivity(input))
            setInput({
                name: "",
                difficulty: 0,
                duration: 0,
                season: "",
                countries: []
            })
        }
        else {
            return alert("Ya existe")
        }
    }




    useEffect(() => {
        dispatch(getCountries());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.conteiner}>


            <div className={style.crear}>

                <div className={style.boton}>
                    <Link to="/home"><button>HOME</button></Link>
                </div>

                <div className={style.titulo}>
                    <h1>Create Activity</h1>
                </div>

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.name}>
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

                    <div className={style.dificultad}>
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

                    <div className={style.duracion}>
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

                    <div className={style.season}>
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

                    <div className={style.paises}>
                        <select onChange={(e) => handleSelect(e)}>
                            {countriesState.map((count) => (
                                <option value={count.name}>{count.name}</option>
                            ))}
                        </select>
                        {errors.countries && (
                            <p>{errors.countries}</p>)}
                    </div>

                    <div className={style.botonCreate}>
                        <button type='submit' disabled={Object.keys(errors).length > 0}>Create</button>
                    </div>

                    <div className={style.paisesMostrados}>
                        {input.countries.map((el) =>
                            <div>
                                <p>{el}</p>
                                <button onClick={() => handleDelete(el)}>X</button>
                            </div>
                        )}
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Create