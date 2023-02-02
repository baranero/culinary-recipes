import React, { useEffect } from "react"
import './Recipes.css'

export default function Recipes(props) {

    const [ingredientsData, setIngredientsData] = React.useState(
        {
            ingredient: ""
        })

    const formatedIngredient = ingredientsData.ingredient
        .replaceAll(',', "%2C")
        .replaceAll(' ', '%20')
    
    const ingredientsArray = []

    function handleChange(event) {
        setIngredientsData(prevSate => {
            const {name, value} = event.target
            return {
                ...prevSate,
                [name]: value,
        }})}

    function handleSubmit(event) {
        event.preventDefault()
    }

    const generateMeal = () => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 0)
    }

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [show, setShow] = React.useState(false)

    useEffect(() => {
            const fetchData = async () => {await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${formatedIngredient}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        )}
                    return response.json()
                })
                .then((actualData) => {
                    setData(actualData.meals)
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message)
                    setData(null)
                })

            }
            if (show === true) {
                fetchData()
        }}, [show, formatedIngredient])


    return (
        <div className={`recipe-container ${props.showMenu && 'recipe-container-moved'}`}>
            <button onClick={props.show} className="end-button">x</button>
            <h2 className="recipe-text">Get your recipes by name</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name of meal"
                    className="recipe-input"
                    type="text"
                    onChange={handleChange}
                    name="ingredient"
                    value={ingredientsData.ingredient}
                />
            </form>
            <button className="recipe-button" onClick={generateMeal}>Find your meal!</button>
            <div className="recipe-map">
            {error && (
                <div>
                    {`There is a problem fetching the post data - ${error}`}
                </div>
            )}
            {data && data.map((data) => (  
                <div key={data.idMeal}>
                <div className="rendered-recipe">
                <h2>{data.strMeal}</h2>
                <div className="rendered-recipe-content">
                    <img className="rendered-recipe-image" src={data.strMealThumb} alt='meal' />
                    <ul>
                        <p><b>Ingredients</b></p>  

                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient1 && 'hidden-ingredients'}`}>{data.strIngredient1}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient2 && 'hidden-ingredients'}`}>{data.strIngredient2}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient3 && 'hidden-ingredients'}`}>{data.strIngredient3}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient4 && 'hidden-ingredients'}`}>{data.strIngredient4}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient5 && 'hidden-ingredients'}`}>{data.strIngredient5}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient6 && 'hidden-ingredients'}`}>{data.strIngredient6}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient7 && 'hidden-ingredients'}`}>{data.strIngredient7}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient8 && 'hidden-ingredients'}`}>{data.strIngredient8}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient9 && 'hidden-ingredients'}`}>{data.strIngredient9}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient10 && 'hidden-ingredients'}`}>{data.strIngredient10}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient11 && 'hidden-ingredients'}`}>{data.strIngredient11}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient12 && 'hidden-ingredients'}`}>{data.strIngredient12}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient13 && 'hidden-ingredients'}`}>{data.strIngredient13}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient14 && 'hidden-ingredients'}`}>{data.strIngredient14}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient15 && 'hidden-ingredients'}`}>{data.strIngredient15}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient16 && 'hidden-ingredients'}`}>{data.strIngredient16}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient17 && 'hidden-ingredients'}`}>{data.strIngredient17}</li>
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient18 && 'hidden-ingredients'}`}>{data.strIngredient18}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient19 && 'hidden-ingredients'}`}>{data.strIngredient19}</li> 
                        <li className={`rendered-recipe-ingredients-description ${!data.strIngredient20 && 'hidden-ingredients'}`}>{data.strIngredient20}</li> 
                    </ul>
                </div>
                <p>{data.strInstructions}</p>
                
                </div></div>
            ))}
            </div>
        </div>
    )}