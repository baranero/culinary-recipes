import React from "react"

export default function Recipes() {

    const [ingredientsData, setIngredientsData] = React.useState(
        {
            ingredient: "",
            numberOfDishes: ""
        })

    const formatedIngredient = ingredientsData.ingredient
        .replaceAll(',', "%2C")
        .replaceAll(' ', '%20')

    function handleChange(event) {
        setIngredientsData(prevSate => {
            const {name, value} = event.target
            return {
                ...prevSate,
                [name]: value,
                [name.numberOfDishes]: value
        }})}

    function handleSubmit(event) {
        event.preventDefault()
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12a9202e9dmsh5c4193899cbb79bp102b03jsn7b9e88a3ddbf',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }}

    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (show === true) {
            fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${formatedIngredient}&number=${ingredientsData.numberOfDishes}`, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        )}
                    return response.json()
                })
                .then((actualData) => {
                    setData(actualData)
                    setError(null)
                    console.log(actualData);
                })
                .catch((err) => {
                    setError(err.message)
                    setData(null)
                })
            }}, [show])

    return (
        <div className="recipe-container">
            <h2 className="recipe-text">Get your recipes by ingredients</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Input your ingredients, if you input a few, separate them with comma"
                    className="recipe-input"
                    type="text"
                    onChange={handleChange}
                    name="ingredient"
                    value={ingredientsData.ingredient}
                />
                <input
                    placeholder="Enter the number of dishes you want to receive"
                    className="recipe-input"
                    type="text"
                    onChange={handleChange}
                    name="numberOfDishes"
                    value={ingredientsData.numberOfDishes}
                />
            </form>
            <button className="recipe-button" onClick={() => setShow(true)}>Find your meal!</button>
            <div>
            {error && (
                <div>
                    {`There is a problem fetching the post data - ${error}`}
                </div>
            )}
            {data && data.map((data) => (  
                <div className="rendered-recipe" key={data.id}>
                    <h3 className="rendered-recipe-title">{data.title}</h3>
                    <div className="rendered-recipe-content">
                        <img className="rendered-recipe-image" src={data.image} alt={data.title}/>
                        <div>
                            <div key={data.id} className="rendered-recipe-ingredients-list">
                                <h4>Used ingredients</h4>
                                {data.usedIngredients && data.usedIngredients.map((data) => (
                                    <ul key={data.id}><li className="rendered-recipe-ingredients-description">{data.original}</li></ul>
                                
                                ))}
                            </div>
                            <div  className="rendered-recipe-ingredients-list">
                                <h4>Missed ingredients</h4>
                                {data.missedIngredients && data.missedIngredients.map((datas) => (
                                    <ul key={datas.id}><li  className="rendered-recipe-ingredients-description">{datas.original}</li></ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )}