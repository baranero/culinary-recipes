import React from "react";

export default function SignInForm() {

        const [userData, setUserData] = React.useState(
            {
                username: "",
                firstName: "",
                lastName: "",
                email: ""
            })

            console.log(userData);
    
        function handleChange(event) {
            setUserData(prevSate => {
                const {name, value} = event.target
                return {
                    ...prevSate,
                    [name]: value
            }})}
    
        function handleSubmit(event) {
            event.preventDefault()
        }
    
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '12a9202e9dmsh5c4193899cbb79bp102b03jsn7b9e88a3ddbf',
                'X-RapidAHost': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            },
            body: `{"username":${userData.username},firstName":${userData.firstName},"lastName":${userData.lastName},"email":${userData.email}}`
        };
    
        const [data, setData] = React.useState(null)
        const [error, setError] = React.useState(null)
        const [show, setShow] = React.useState(false)
    
        React.useEffect(() => {
            if (show === true) {
                fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/users/connect', options)
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
                <h2 className="recipe-text">Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Username"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="username"
                        value={userData.username}
                    />
                    <input
                        placeholder="First name"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="firstName"
                        value={userData.firstName}
                    />
                    <input
                        placeholder="Last name"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="lastName"
                        value={userData.lastName}
                    />
                    <input
                        placeholder="Email"
                        className="recipe-input"
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={userData.email}
                    />
                </form>
                <button className="recipe-button" onClick={() => setShow(true)}>Sign in</button>
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