import React from "react";
import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { console.log(data.meals); setItem(data.meals);
            setShow(true) })

    }, [url])
    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if(evt.key === "Enter") {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                    <h1 className="h1-heading">Search your recipe</h1>
                    <div className="searchBox">
                        <input type="search" className="search-bar" onChange={e => setSearch(e.target.value) } onKeyDown={searchRecipe}/>
                    </div>
                </div>
                <div className="container">
                    {
                        show ? <MealItem data={item}/> : <img className="loader-gif" src={require('../img/loader.gif')} alt="" />
                    }
                </div>
                <div className="indexContainer">
                    <RecipeIndex alphaIndex = {(alpha)=> setIndex(alpha)}/>
                </div>
            </div>
        </>
    )
}

export default Meal;