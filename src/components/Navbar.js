import React, { useEffect, useState } from "react";
import './Navbar.css'

export default function Navbar(props) {

    const [show, setShow] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    function showHamburgeMenuList() {
        setShowMenu(prevState => !prevState)
    }

    return (
        <header className={`active ${show && 'hidden'}`}>
            <div className="logo-part">
                <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-chef-hat.png'} alt='logo' />
                <h1>Eat IT</h1>
            </div>
            <nav className="navbar">
                <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                <button className="navbar-button" onClick={props.ingredientsRender}>Random recipe</button>
            </nav>
            <div className="hamburger-menu">
                <img onClick={showHamburgeMenuList} src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt='hamburger' />
                <nav className="navbar">
                    <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                    <button className="navbar-button" onClick={props.ingredientsRender}>Random recipe</button>
                </nav>
            </div>
        </header>
    )
}

//

//
  
  