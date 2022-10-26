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
                <button className="navbar-button">Meal plan</button>
                <button className="navbar-button" onClick={props.signinRender}>Sign in</button>
            </nav>
        </header>
    )
}

//<a href="https://www.freepik.com/free-vector/cute-doodle-chef-hat-vector_33114696.htm#page=9&query=chef%20hat&position=11&from_view=keyword">Image by rawpixel.com</a> on Freepik

//Photo by <a href="https://unsplash.com/@hermez777?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hermes Rivera</a> on <a href="https://unsplash.com/s/photos/meal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  