import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail, cleanDetail } from "../../redux/actions";
import style from "./detail.module.css"

const Detail = () => {
    const dispatch = useDispatch();
    const countryDetail = useSelector(state => state.countryDetail)
    const { id } = useParams();


    useEffect(() => {
        dispatch(getCountryDetail(id))
        return () => dispatch(cleanDetail())
    }, [id])



    return (
    
        <div className={style.todo}>

            <div  className={style.card}>

                <div className={style.letras}>
                <h1>{countryDetail.id}</h1>
                <h2>{countryDetail.name}</h2>
                <h2>CONTIENT: {countryDetail.continent}</h2>
                <h2>CAPITAL: {countryDetail.capital}</h2>
                <h2>SUBREGION: {countryDetail.subregion}</h2>
                <h2>AREA: {countryDetail.area}</h2>
                <h2>POPULATION: {countryDetail.poblacion}</h2>
                </div>

                <div className={style.img}>
                <img src={countryDetail.image} alt={countryDetail.name} />
                </div>

            </div>

            <div  className={style.activity}>

                <div  className={style.titulo}>
                <h2>Actividades:</h2>
                </div>

                <div  className={style.datos}>
                {countryDetail.activities && countryDetail.activities.length ? (
                    countryDetail.activities.map(e => {
                        return (
                            <div>
                                <h3>{e.name}</h3>
                                <h3>DIFFICULTY: {e.difficulty}</h3>
                                <h3>DURATION: {e.duration}</h3>
                                <h3>SEASON: {e.season}</h3>
                            </div>
                        );
                    })
                ) : (
                    <p>No hay actividades disponibles.</p>
                )}
                </div>

            </div>

        </div>
    );
};
export default Detail