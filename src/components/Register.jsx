/* TODO - add your code to create a functional React component that renders a registration form */
import {useState} from 'react'

const Register = ({setToken, setRegister}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'applicaiton/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const result = await response.json()
            setToken(result.token)
            console.log(result)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
        <h3>Sign up</h3>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                email: <input value={email} onChange={(event) =>
                setEmail(event.target.value)}/>
            </label>
            <label>
                password: <input value={password} onChange={(event) =>
                setPassword(event.target.value)}/>
            </label>
            <button onClick={()=>{
                setRegister(true);
            }}>Submit</button>
        </form>
        </>
    )
}

export default Register