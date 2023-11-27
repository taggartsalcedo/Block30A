/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from 'react'

const Library = ({setHomeLibrary, SetThisBook}) => {
    const [library, setLibrary] = useState ([])
    useEffect (() => {
        const getLibrary = async () => {
            try {
                const response = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
                const result =await response.json()
                const library = result.books
                setLibrary(library)
                console.log(result.books)
            }
            catch (error) {
                console.log(error)
            }
        }; getLibrary()
    }, [])
    return (
        <>
            <h1>Books</h1>
            <li>
                {library.map((book) => {
                    return <li key={book.title} onClick={()=>
                        {
                            setHomeLibrary(true);
                            setThisBook(book)
                        }}>{book.title}</li>
                })}
            </li>
        </>
    )
}

export default Library 