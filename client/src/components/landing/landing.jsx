import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div >
            <div >
              
                <h1>Descubre los 250 países del mundo y amplía tu conocimiento sobre geografía, historia, cultura y mucho más en nuestra página informativa y fácil de usar</h1>
               
                <div>
                    <Link to = '/home'>
                        <button>INGRESAR</button>
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Landing;