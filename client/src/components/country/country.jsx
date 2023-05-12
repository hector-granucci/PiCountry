import { Link } from "react-router-dom";

const Country = ({ id, image, name, continent }) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>
            <h2>{continent}</h2>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Country;