import { useState } from 'react'
import bookLogo from './assets/books.png'
import Accounts from './components/Accounts.jsx'
import Books from './components/Books.jsx'
import Login from './components/login.jsx'
import Navigation from './components/navigation.jsx'
import Register from './components/Register.jsx'
import SingleBook from './components/SingleBook.jsx'


function App() {
  const [token, setToken] = useState(null)
  const [books, setBooks] = useState(false)
  const [register, setRegister] = useState(false)


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
          thisBook={thisBook}
          setHomeLibrary={setHomeLibrary}
          />) : (
          <Books
          setHomeLibrary={setHomeLibrary}
          setThisBook={setThisBook}
          />
        )
      }
    </>
  )
}

export default App
