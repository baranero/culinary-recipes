import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients';

import Footer from './components/Footer';

function App() {

  const [isShownRecipes, setIsShownRecipes] = React.useState(false)
  const [isShownIngredients, setIsShownIngredients] = React.useState(false)


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
      />
      {isShownRecipes && <Recipes show = {closeAll}/>}
      {isShownIngredients && <Ingredients show = {closeAll}/>}
      <Footer/>
    </div>
  );
}

export default App;
