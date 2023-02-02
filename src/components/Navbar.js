import React, { useEffect, useState } from "react";
import './Navbar.css'

export default function Navbar(props) {

    const [show, setShow] = useState(false)


    const controlNavbar = () => {
        if (window.scrollY > 250 ) {
            setShow(true)
            props.setShowMenu(false)
        }else{
          setShow(false)
          props.setShowMenu(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    function showHamburgeMenuList() {
        props.setShowMenu(prevState => !prevState)
    }

    return (
        <header className={`active ${show && 'hidden'} ${props.showMenu && 'active-dropdown'}`}>
            <div className="logo-part">
                <div>
                    <img className="logo" src={process.env.PUBLIC_URL + '/images/logo-chef-hat.png'} alt='logo' />
                    <h1>Eat IT</h1>
                </div>
                <div className="hamburger-menu">
                    <img className="hamburger-img" onClick={showHamburgeMenuList} src={process.env.PUBLIC_URL + '/images/hamburger.png'} alt='hamburger' />
                </div>
            </div>
            <nav className="navbar">
                <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                <button className="navbar-button" onClick={props.ingredientsRender}>Random recipe</button>
            </nav>

            { props.showMenu && <nav className="navbar-hamburger">
                    <button className="navbar-button" onClick={props.recipeRender}>Recipes</button>
                    <button className="navbar-button" onClick={props.ingredientsRender}>Random recipe</button>
                </nav>}
        </header>
    )
}

//

//
  
  