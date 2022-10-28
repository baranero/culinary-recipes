import React from "react";


export default function Navbar(props) {

    return (
        <header>
            <div className="logo-part">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-chef-hat.png'} />
                <h1>Eat IT</h1>
            </div>
            <nav className="navbar">
                <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                <button className="navbar-button" onClick={props.ingredientsRender}>Ingredients</button>
                <button className="navbar-button" onClick={props.mealplanRender}>Meal plan</button>
                <button className="navbar-button" onClick={props.signinRender}>Sign in</button>
            </nav>
            <div className="hamburger-menu">
                <img src={process.env.PUBLIC_URL + '/images/hamburger.png'} />
            </div>
        </header>
    )
}

//

//
  
  