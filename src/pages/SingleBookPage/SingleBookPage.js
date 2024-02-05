import './singleBookPage.scss';
import exampleBooks from '../../helpers/exampleBooks';
import { useGlobalContext } from '../../context';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router';

const URL = "https://openlibrary.org/works/";

const SingleBookPage = ({img, title, author, rating}) => {

    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        async function getBookDetails() {
            try {
                const response = await fetch(`${URL}${id}.json`);
                const data = await response.json();

                if(data) {
                    const {description, title, covers} = data;
                    const newBook = {
                        description: description ? description : "no descr",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`: 'not found'
                    };
                    setBook(newBook);
                } else {
                    setBook(null);
                }
                setLoading(false);
            } catch(error) {
                console.log(error);
                setLoading(false);
            }
        }

        getBookDetails();
    }, [id])

    if(loading) return <Loader/>

    return ( 
        <>
            <section className="book">
                <div className="container">
                    <div className="book__inner">
                        <img src={book?.cover_img} alt="" className="book__img" />
                        <div className="book__info">
                            <h3 className="book__title">{book?.title}</h3>
                            <p className="book__descr">{book?.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SingleBookPage;