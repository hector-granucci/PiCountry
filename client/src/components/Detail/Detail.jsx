import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail, cleanDetail } from "../../redux/actions";

const Detail = () => {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const { id } = useParams();


    useEffect(() => {
        dispatch(getCountryDetail(id))
        return () => dispatch(cleanDetail())
    }, [id])

    return (
        <div>
            <h1>{countryDetail.id}</h1>
            <h2>{countryDetail.name}</h2>
            <h2>{countryDetail.continent}</h2>
            <h2>{countryDetail.capital}</h2>
            <h2>{countryDetail.subregion}</h2>
            <h2>{countryDetail.area}</h2>
            <h2>{countryDetail.poblacion}</h2>
            <img src={countryDetail.image} alt={countryDetail.name}/>
        </div>
    )
}

export default Detail