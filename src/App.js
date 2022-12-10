import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SignInForm from './components/SignInForm';
import Ingredients from './components/Ingredients';
import MealPlan from './components/MealPlan';
import Footer from './components/Footer';

function App() {

  const [isShownRecipes, setIsShownRecipes] = React.useState(false)
  const [isShownSignin, setIsShownSignin] = React.useState(true)
  const [isShownIngredients, setIsShownIngredients] = React.useState(false)
  const [isShownMealplan, setIsShownMealplan] = React.useState(false)

  function recipeRender() {
    setIsShownRecipes(prevState => !prevState)
    setIsShownSignin(false)
    setIsShownIngredients(false)
    setIsShownMealplan(false)
  }

  function signinRender() {
    setIsShownRecipes(false)
    setIsShownSignin(prevState => !prevState)
    setIsShownIngredients(false)
    setIsShownMealplan(false)
  }

  function ingredientsRender() {
    setIsShownRecipes(false)
    setIsShownSignin(false)
    setIsShownMealplan(false)
    setIsShownIngredients(prevState => !prevState)
  }

  function mealplanRender() {
    setIsShownIngredients(false)
    setIsShownRecipes(false)
    setIsShownSignin(false)
    setIsShownMealplan(prevState => !prevState)
  }

  function closeAll() {
    setIsShownIngredients(false)
    setIsShownMealplan(false)
    setIsShownRecipes(false)
    setIsShownSignin(false)
  }
  

  return (
    <div className="whole-page">
      <Navbar
        recipeRender = {recipeRender}
        signinRender = {signinRender}
        ingredientsRender = {ingredientsRender}
        mealplanRender = {mealplanRender}
      />
      {isShownSignin && <SignInForm show = {closeAll}/>}
      {isShownRecipes && <Recipes show = {closeAll}/>}
      {isShownIngredients && <Ingredients show = {closeAll}/>}
      {isShownMealplan && <MealPlan show = {closeAll}/>}
      <Footer/>
    </div>
  );
}

export default App;
