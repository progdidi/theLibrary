const BooksPage = () => {

    const isbn = '0451526538';
    const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const book = data[`ISBN:${isbn}`];
        console.log(book.title);
        console.log(book.authors);
        console.log(book.publish_date);
    })
    .catch(error => console.log(error));
    
    return ( 
        <div className="books">
           
        </div>
     );
}
 
export default BooksPage;