import { useGlobalContext } from "../../context";
import BookItem from "../../components/BookItem/BookItem";
import Loader from '../../components/Loader/Loader';
import './booksPage.scss';

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

    if(loading) return <Loader/>;



    return (
        <section className="books">
            <div className="container">
                <div className="books__items">
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
                </div>
            </div>
        </section>
    )


}
 
export default BooksPage;