/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const responce = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',
                {
                    method: "Post",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
                const result = await responce.json()
                console.log(result)
            } catch (error) {
                setError(error.message)
            }
    }

return (
    <>
        <h3>Log On</h3>
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
            <button>Log On</button>
        </form>
    </>
)

}

export default Login