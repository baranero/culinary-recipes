import React from "react";

export default function Ingredients() {

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

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12a9202e9dmsh5c4193899cbb79bp102b03jsn7b9e88a3ddbf',
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    const [data, setData] = React.useState()
    const [error, setError] = React.useState(null)
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (show === true) {
            fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/substitutes?ingredientName=${ingredientsSubstitutes.ingredient}`, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        )}
                    return response.json()
                })
                .then((actualData) => {
                    setData(Array(actualData))
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
            <h2 className="recipe-text">Get your ingredients substitutes</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Input your ONE ingredient"
                    className="recipe-input"
                    type="text"
                    onChange={handleChange}
                    name="ingredient"
                    value={ingredientsSubstitutes.ingredient}
                />
            </form>
            <button className="recipe-button" onClick={() => setShow(true)}>Find your ingredients substitute!</button>
            <div>
            {error && (
                <div>
                    {`There is a problem fetching the post data - ${error}`}
                </div>
            )}
             {data && data.map((data) => (
 <div key={data.ingredient} className="rendered-substitutes">
 <h3 className="rendered-recipe-title"> {data.ingredient.toUpperCase()}</h3>
 <div className="rendered-subs-content">
     <div className="rendered-recipe-ingredients-list">
         <h4>Substitutes</h4>
         {data.substitutes && data.substitutes.map((data) => (
             <div key={data}>
                 {data}
             </div>
         ))}
     </div>
 </div>
</div>
             ))}
               
            
            </div>
        </div>
    )
}