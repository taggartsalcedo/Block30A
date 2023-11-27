/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
const Book = ({thisBook, setHomeLibrary}) => {
    return (
        <>
        <h2>Background Information</h2>
        <h3>Title: {thisBook.title} Author:{thisBook.author}</h3>
        <img key={thisBook.coverimage} src={thisBook.coverimage} alt="book cover"/>
        <p>Description: {thisBook.description}</p>
        <button onClick={()=>{setHomeLibrary(false)}}>Return</button>
        </>
    )
}

export default Book