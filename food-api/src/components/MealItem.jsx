import React from "react";
import NotFound from "./NotFound";
import { useNavigate } from "react-router-dom";
const MealItem = ({ data }) => {
    console.log(data);
    let navigate = useNavigate();
    return (
        <>
            {
                (!data) ?  <NotFound/>  : data.map(item => {
                    return (

                        <div className="card" key = {item.idMeal} onClick={() => {navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt="Image not available" />
                            <h3>{item.strMeal}</h3>
                        </div>

                    )
                })
            }

        </>
    )
}

export default MealItem