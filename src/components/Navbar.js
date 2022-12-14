import React from "react";
import './Navbar.css'

export default function Navbar(props) {

    function showHamburgeMenuList() {
        
    }

    return (
        <header>
            <div className="logo-part">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-chef-hat.png'} />
                <h1>Eat IT</h1>
            </div>
            <nav className="navbar">
            <button className="navbar-button" onClick={props.signinRender}>Sign in</button>
                <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                <button className="navbar-button" onClick={props.ingredientsRender}>Random recipe</button>
                <button className="navbar-button" onClick={props.mealplanRender}>Meal plan</button>
            </nav>
            <div className="hamburger-menu">
                <img onClick={showHamburgeMenuList} src={process.env.PUBLIC_URL + '/images/hamburger.png'} />
            </div>
        </header>
    )
}

//

//
  
  