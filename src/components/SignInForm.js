import React from "react";

export default function SignInForm(props) {

        const [userData, setUserData] = React.useState(
            {
                username: "",
                password: "",
            })

            console.log(userData);

        const randomLogin = 'dwight-schrute'
        const randomPassword = 'beetsfarm123'
    
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
    
        const [show, setShow] = React.useState(false)
    
        React.useEffect(() => {
            if (show === true) {
                if (userData.username === randomLogin && userData.password === randomPassword) {
                    props.show()
                } else {
                    signalWrongPassword()
                    
                }
                }}, [show])

                function signalWrongPassword() {
                    for (let i = 0; i < 2; i++) {
                    let wrongData = document.getElementsByClassName("recipe-input")[i];
                    if (true){
                      wrongData.classList.toggle("recipe-input-error")
                    }}
                  }

        return (
            <div className="recipe-container">
                <button onClick={props.show} className="end-button">x</button>
                <h2 className="recipe-text">Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Username"
                        className="recipe-input"
                        type="text"
                        onChange={handleChange}
                        name="username"
                        value={userData.username}
                        autoComplete='username'
                    />
                    <input
                        placeholder="Password"
                        className="recipe-input"
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={userData.password}
                        autoComplete='current-password'
                    />
                </form>
                <button className="recipe-button" onClick={() => setShow(true)}>Sign in</button>
                <h3>Username: dwight-schrute</h3>
                <h3>Password: beetsfarm123</h3>
            </div>
        )}
