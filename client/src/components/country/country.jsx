import { Link } from "react-router-dom";
import style from "./country.module.css"

const Country = ({ id, image, name, continent }) => {
    return (
        <div className={style.Card}>

            <div className={style.Name}>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            </div>

            <div className={style.Otros}>
            <h2>{continent}</h2>
            </div>

            <div className={style.imagen}>
            <img src={image} alt={name}/>
            </div>

        </div>
    )
}

export default Country;