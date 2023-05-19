import React from "react";
import { Link } from 'react-router-dom';
import style from "./landing.module.css"

const Landing = () => {
    return (
        <div className={style.conteiner}>

                <div className={style.Letras}>
                <h1>ENJOY THE WORLD THROUGH YOUR </h1>
                <h1>TRAVELS</h1>
                </div>

                <div className={style.boton}>
                    <Link to = '/home'>
                        <button>LET'S GO</button>
                    </Link>
                </div>

         

        </div>
    );
}

export default Landing;