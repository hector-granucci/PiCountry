import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderName, orderPopulation, filterContinente, filterActiviti, getActivity } from "../../redux/actions.js";
import Paginacion from "../Paginacion/Paginacion.jsx";
import Country from "../country/country";
import Nav from '../Nav/Nav.jsx';
import style from "./home.module.css"


const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const activityState = useSelector((state) => state.activities)

    const [currentPage, setCurrentPage] = useState(1)
    const contriesPerPage = 10;
    const firstCountry = (currentPage - 1) * contriesPerPage
    const lastCountry = firstCountry + contriesPerPage
    const currentCountry = countries.slice(firstCountry, lastCountry)

    const paginate = (number) => {
        setCurrentPage(number)
    }

    const handlerPrev = () => {
        setCurrentPage(currentPage - 1)
    }

    const handlerNext = () => {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        if (Object.keys(countries).length < 1) {
            dispatch(getActivity())
            dispatch(getCountries())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [order, setOrder] = useState("")

    const handleSort = (e) => {
        e.preventDefault();
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrder(`ordernado ${e.target.value}`)
    }
    const handleSortPop = (e) => {
        e.preventDefault();
        dispatch(orderPopulation(e.target.value))
        setCurrentPage(1);
        setOrder(`ordernado ${e.target.value}`)
    }
    const handlerFilterContinent = (e) => {
        dispatch(filterContinente(e.target.value))
    }
    const handlerFilterActivity = (e) => {
        dispatch(filterActiviti(e.target.value))
    }

    return (
        <div className={style.conteiner}>

            <div className={style.titulo}>
            <h1>COUNTRIES OF THE WORLD</h1>
            </div>

<div className={style.nav}>
            <Nav />
</div>

            <div className={style.selects}>
            <div className={style.asc}>
            <select onChange={e => handleSort(e)}>
                <option value="des">Desendente</option>
                <option value="asc">Asendente</option>
            </select>
            </div>

            <div className={style.mayor}>
            <select onChange={e => handleSortPop(e)}>
                <option value="menor">Menor Poblacion</option>
                <option value="mayor">Mayor Poblacion</option>
            </select>
            </div>

            <div className={style.continent}>
            <select onChange={e => handlerFilterContinent(e)}>
                <option value="All">All</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value='Antarctica'>Antártica</option>
            </select>
            </div>

            <div className={style.activity}>
            <select onChange={(e) => handlerFilterActivity(e)}>
                {activityState.map((count) => (
                    <option value={count.name}>{count.name}</option>
                ))}
            </select>
            </div>

            </div>


            <div  className={style.cards}>
            {
                currentCountry.map(con => {
                    return (
                        <Country
                            key={con.id}
                            id={con.id}
                            name={con.name}
                            image={con.image}
                            continent={con.continent}
                        />
                    )
                })
            }
            
            </div>
            
            <div className={style.pag}>
                <Paginacion
                    currentPage={currentPage}
                    contriesPerPage={contriesPerPage}
                    paginate={paginate}
                    handlerPrev={handlerPrev}
                    handlerNext={handlerNext}
                    countries={countries?.length}
                />
            </div>


        </div>
    )
}

export default Home