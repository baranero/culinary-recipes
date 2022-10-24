import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SignInForm from './components/SignInForm';

function App() {

  const [isShownRecipes, setIsShownRecipes] = React.useState(false)
  const [isShownSignin, setIsShownSignin] = React.useState(false)

  function recipeRender() {
    setIsShownRecipes(prevState => !prevState)
  }

  function signinRender() {
    setIsShownRecipes(false)
    setIsShownSignin(prevState => !prevState)
  }
  

  return (
    <div className="whole-page">
      <Navbar
        recipeRender = {recipeRender}
        signinRender = {signinRender}
      />
      {isShownRecipes && 
      <Recipes
      />}
      {isShownSignin && <SignInForm
      />}
    </div>
  );
}

export default App;
