import React from "react";

export default function MealPlan(props) {

        const [mealplanData, setMealplanData] = React.useState(
            {
                timeFrame: "",
                calories: "",
                diet: "",
                exclude: ""
            })

            const formatedIngredient = mealplanData.exclude
            .replaceAll(',', "%2C")
            .replaceAll(' ', '%20')

            console.log(mealplanData);
    
        function handleChange(event) {
            setMealplanData(prevSate => {
                const {name, value} = event.target
                return {
                    ...prevSate,
                    [name]: value
            }})}
    
        function handleSubmit(event) {
            event.preventDefault()
        }
    
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'xxx',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
          }
        };
        
    
        const [data, setData] = React.useState()
        const [error, setError] = React.useState(null)
        const [show, setShow] = React.useState(false)
    
        React.useEffect(() => {
            if (show === true) {
                fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${mealplanData.timeFrame}&targetCalories=${mealplanData.calories}&diet=${mealplanData.diet}&exclude=${mealplanData.exclude}`, options)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(
                                `This is an HTTP error: The status is ${response.status}`
                            )}
                        return response.json()
                    })
                    .then((actualData) => {
                        setData([actualData])
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
                <button onClick={props.show} className="end-button">x</button>
                <h2 className="recipe-text">Meal plan</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Time frame (day or week)"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="timeFrame"
                        value={mealplanData.timeFrame}
                    />
                    <input
                        placeholder="Calories"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="calories"
                        value={mealplanData.calories}
                    />
                    <input
                        placeholder="Diet"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="diet"
                        value={mealplanData.diet}
                    />
                    <input
                        placeholder="Exclude"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="exclude"
                        value={mealplanData.exclude}
                    />
                </form>
                <button className="recipe-button" onClick={() => setShow(true)}>Get your plan!</button>
                <div>
                {error && (
                    <div>
                        {`There is a problem fetching the post data - ${error}`}
                    </div>
                )}
                {data && data.map((data) => (
                    <div>
                    {data.meals && data.meals.map((data) => (
<div className="rendered-recipe" key={data.id}>
                        <h3 className="rendered-recipe-title">{data.title}</h3>
                        <div key={data.id} className="rendered-mealplan-content">

                                <div key={data.id} className="rendered-recipe-ingredients-list">
                                    <p>Ready in: {data.readyInMinutes} minutes</p>
                                    <p>Servings: {data.servings}</p>
                                    <h4><a href={data.sourceUrl} target="_blank" >Check meal plan!</a></h4>
                                </div>
                        </div>
                    </div>
                    ))} 
                    </div>
                ))}
                </div>
            </div>
        )}
