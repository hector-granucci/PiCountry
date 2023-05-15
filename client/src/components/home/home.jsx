import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions.js";
import Paginacion from "../Paginacion/Paginacion.jsx";
import Country from "../country/country";
import Nav from '../Nav/Nav.jsx';


const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

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
        if(countries.length < 1){
        dispatch(getCountries())}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <h1>Countries</h1>
             <Nav/>
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
            <div>
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