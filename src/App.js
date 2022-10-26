import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SignInForm from './components/SignInForm';
import Ingredients from './components/Ingredients';

function App() {

  const [isShownRecipes, setIsShownRecipes] = React.useState(false)
  const [isShownSignin, setIsShownSignin] = React.useState(false)
  const [isShownIngredients, setIsShownIngredients] = React.useState(false)

  function recipeRender() {
    setIsShownRecipes(prevState => !prevState)
    setIsShownSignin(false)
    setIsShownIngredients(false)
  }

  function signinRender() {
    setIsShownRecipes(false)
    setIsShownSignin(prevState => !prevState)
    setIsShownIngredients(false)
  }

  function ingredientsRender() {
    setIsShownRecipes(false)
    setIsShownSignin(false)
    setIsShownIngredients(prevState => !prevState)
  }
  

  return (
    <div className="whole-page">
      <Navbar
        recipeRender = {recipeRender}
        signinRender = {signinRender}
        ingredientsRender = {ingredientsRender}
      />
      {isShownRecipes && <Recipes/>}
      {isShownSignin && <SignInForm/>}
      {isShownIngredients && <Ingredients/>}
    </div>
  );
}

export default App;
