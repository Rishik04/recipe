import React from 'react'
import { Link } from 'react-router-dom'
import './Recipes.css'
export const Recpies = ({title,image,calories}) => {
    return ( 
        <Link to={`/Ingredients/${title}`} className="mainBody col-lg-4 col-md-6">
            <div className="card"><h3>{title}</h3>
            <img className="card-img" src={image} alt="loading"/>
            <h6 className="calories d-inline-block px-2 py-1">Calories:-{calories}</h6>
            </div>  
        </Link>
            )
}
export default Recpies;

