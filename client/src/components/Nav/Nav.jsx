import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { getCountryName,  getCountries } from '../../redux/actions';


const Nav = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')

    const handleInputChange = (event) => {
        setName(event.target.value);
      };

    const handleSearch = () => {
        dispatch(getCountryName(name));
      };

    const handlerCoutry = () => {
        dispatch(getCountries())
    }
    

    return (
        <div>
            <nav>
                <input 
                value={name} 
                type='text' 
                placeholder="Qué país deseas visitar..." 
                onChange={handleInputChange}
                 />
                <button onClick={handleSearch}>BUSCAR</button>
                <button onClick={handlerCoutry}>
                    <Link to="/home">HOME</Link>
                </button>
                <button>
                    <Link to="/create">CREATE ACTIVITY</Link>
                </button>
            </nav>
        </div>
    )
}

export default Nav















