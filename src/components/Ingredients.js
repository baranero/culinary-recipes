import React from "react";

export default function Ingredients(props) {

    const [ingredientsSubstitutes, setIngredientsSubstitutes] = React.useState(
        {
            ingredient: ""
        })

    function handleChange(event) {
        setIngredientsSubstitutes(prevSate => {
            const {name, value} = event.target
            return {
                ...prevSate,
                [name]: value,
        }})}

    function handleSubmit(event) {
        event.preventDefault()
    }

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (show === true) {
            fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
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
            }}, [show])



    return (
        <div className="recipe-container">
            <button onClick={props.show} className="end-button">x</button>
            <h2 className="recipe-text">Random meal</h2>
            <form onSubmit={handleSubmit}>
            </form>
            <button className="recipe-button" onClick={() => setShow(true)}>Find your meal!</button>
            <div>
            {error && (
                <div>
                    {`There is a problem fetching the post data - ${error}`}
                </div>
            )}
            {data && data.map((data) => (  
                            
                <div  key={data.idMeal}>
                    {console.log(data)}
                <div className="rendered-recipe">
                <h2>{data.strMeal}</h2>
                <div className="rendered-recipe-content">
                    <img className="rendered-recipe-image" src={data.strMealThumb} />
                    <ul>
                        <li className="rendered-recipe-ingredients-description">{data.strIngredient1}</li>
                        <li className="rendered-recipe-ingredients-description">{data.strIngredient2}</li>
                        <li className="rendered-recipe-ingredients-description">{data.strIngredient3}</li>
                        <li className="rendered-recipe-ingredients-description">{data.strIngredient4}</li>
                        <li className="rendered-recipe-ingredients-description">{data.strIngredient5}</li>
                    </ul>
                </div>
                <p>{data.strInstructions}</p>
                
                </div></div>
            ))}
               
            
            </div>
        </div>
    )
}