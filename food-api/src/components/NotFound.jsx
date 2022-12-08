import React from "react";
const NotFound = () => {
    return (
        <div>
            <h1 className="h1-heading">Sorry, we don't have recipes with that letter yet. </h1>
           <img className="notFound-img" src={require('../img/404-food.png')} alt="hola" />
        </div>
    
    )
}

export default NotFound