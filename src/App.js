import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients';

import Footer from './components/Footer';

function App() {

  const [isShownRecipes, setIsShownRecipes] = React.useState(false)
  const [isShownIngredients, setIsShownIngredients] = React.useState(false)
  const [showMenu, setShowMenu] = useState(false)


  function recipeRender() {
    setIsShownRecipes(true)
    setIsShownIngredients(false)
  }


  function ingredientsRender() {
    setIsShownRecipes(false)
    setIsShownIngredients(true)
  }

  function closeAll() {
    setIsShownIngredients(false)
    setIsShownRecipes(false)
  }


  

  return (
    <div className="whole-page">
      <Navbar
        recipeRender = {recipeRender}
        ingredientsRender = {ingredientsRender}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {isShownRecipes && <Recipes show = {closeAll} showMenu={showMenu}/>}
      {isShownIngredients && <Ingredients show = {closeAll} showMenu={showMenu}/>}
      <Footer/>
    </div>
  );
}

export default App;
