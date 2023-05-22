import { useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { getCountryName,  getCountries } from '../../redux/actions';
import style from "./nav.module.css"


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
        <div className={style.todo}>
            <nav>

                <div className={style.home}>
                <button onClick={handlerCoutry}>
                    <Link to="/home">HOME</Link>
                </button>
                </div>

                <div className={style.barra}>
                <input 
                value={name} 
                type='text' 
                placeholder="Which country do you want" 
                onChange={handleInputChange}
                 />
                </div>

                <div className={style.buscar}>
                <button onClick={handleSearch}>LOOK FOR</button>
                </div>

                <div className={style.create}>
                <button>
                    <Link to="/create">CREATE ACTIVITY</Link>
                </button>
                </div>

            </nav>
        </div>
    )
}

export default Nav















