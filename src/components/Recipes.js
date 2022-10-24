import React from "react";

export default function Recipes() {

    const [ingredientsData, setIngredientsData] = React.useState(
        {
            ingredient: ""
        }
    )
    
    console.log(ingredientsData.ingredient);

    const formatedIngredient = ingredientsData.ingredient
        .replaceAll(',', "%2C")
        .replaceAll(' ', '%20')

    console.log(formatedIngredient);

function handleChange(event) {
    setIngredientsData(prevSate => {
        const {name, value} = event.target
        return {
            ...prevSate,
            [name]: value
        }
    })   
}

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

const [data, setData] = React.useState(null)

const [error, setError] = React.useState(null);
const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        if (show === true) {
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${formatedIngredient}&number=1`, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    )
                }
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
            }
            
    }, [show])




    return (
        <div className="recipe-container">
            <h2 className="recipe-text">Get your recipes by ingredients</h2>
            <form onSubmit={handleSubmit}>
            <input
                placeholder="If you input a few, separate them with comma"
                className="recipe-input"
                type="text"
                onChange={handleChange}
                name="ingredient"
                value={ingredientsData.ingredient}
            />
            </form>
            <button className="recipe-button" onClick={() => setShow(true)}>Find your meal!</button>
            <div >
            
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data && data.map((data) => (
                <div key={data.id}>
                    <h3>{data.title}</h3>
                    <img src={data.image} />
                    {data.missedIngredients.map(() => {
                        return <div key={data.missedIngredients.id}>{data.missedIngredients.name}
                        {data.missedIngredients.amount}
                        {data.missedIngredients.id}
                        </div>
                    })}
                    
                </div>
                ))}
        

            </div>
        </div>

    )

    }
/*
    {data.missedIngredients && data.missedIngredients.map(({name }) => (
        <div>
            {name}
        </div>
    ))} */