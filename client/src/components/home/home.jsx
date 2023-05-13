import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions.js";
import Country from "../country/country";
import Nav from '../Nav/Nav.jsx';


const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)

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
                countries.map(con => {
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
    )
}

export default Home