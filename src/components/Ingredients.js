import React from 'react';
import './Ingredients.css';
export const Ingredients = ({ingredients,calories,image,title,match}) => {
    console.log(match);
    // console.log(ingredients);
    return (
        <div className="container text-center">
            <h4 className="my-4">Recipe</h4>
            <h2 className="text-center">{title}</h2>
            <img className="card-img my-2" src={image} alt="loading"/>
            <h6>{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}</h6>
            <h6 className="calories d-inline-block px-2 py-1">Calories:-{calories}</h6>
        </div>
    )
}
