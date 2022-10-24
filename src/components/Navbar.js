import React from "react";


export default function Navbar(props) {

    return (
        <header>
            <div className="logo-part">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-chef-hat.png'} />
                <h1>Eat IT</h1>
            </div>
            <nav className="navbar">
                <span onClick={props.recipeRender}>Recipes</span>
  
                <span>Ingredients</span>
                <span>Meal plan</span>
                <span onClick={props.signinRender}>Sign in</span>
            </nav>
        </header>
    )
}

//<a href="https://www.freepik.com/free-vector/cute-doodle-chef-hat-vector_33114696.htm#page=9&query=chef%20hat&position=11&from_view=keyword">Image by rawpixel.com</a> on Freepik