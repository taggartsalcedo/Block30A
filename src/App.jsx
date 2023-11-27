import { useState } from 'react'
import bookLogo from './assets/books.png'
import Books from './components/Books.jsx'
import Login from './components/login.jsx'
import Register from './components/Register.jsx'
import SingleBook from './components/SingleBook.jsx'


const App = () => {
  const [token, setToken] = useState(null) //app.jsx
  const [homeLibrary, setHomeLibrary] = useState(false) //books.jsx 
  const [register, setRegister] = useState(false) // register.jsx
  const [thisBook, setThisBook] =useState(``) //singleBook.jsx  


  return (
    <>
      <h1><img id='logo-image' src={bookLogo} />Library App</h1>
      {
        register ? (
          <Login />) : (
          <Register token={token}
            setToken={setToken}
            setRegister={setRegister}
            />
          )
      }

      <h1>Books</h1>
      {
          homeLibrary ? (
          <SingleBook
          thisBook= {thisBook}
          setHomeLibrary= {setHomeLibrary}
          />) : (
          <Books
          setHomeLibrary= {setHomeLibrary}
          setThisBook= {setThisBook}
          />
        )
      }
    </>
  )
}

export default App
