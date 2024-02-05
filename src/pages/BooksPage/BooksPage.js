import { useGlobalContext } from "../../context";
import BookItem from "../../components/BookItem/BookItem";
import Loader from '../../components/Loader/Loader';

//https://covers.openlibrary.org/b/id/240727-S.jpg


const BooksPage = () => {

    const {books, loading, resultTitle} = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""), //to get only id
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : 'not found'


        }
    });

    console.log(booksWithCovers);

    if(loading) return <Loader/>;



    return (
        <section className="books">
            <h2>{resultTitle}</h2>
            
            {
                booksWithCovers.slice(0, 30).map((item, index) => {
                    return (
                        <BookItem
                            key={index}
                            {...item}
                        />
                    )
                })
            }
        </section>
        
    )


}
 
export default BooksPage;