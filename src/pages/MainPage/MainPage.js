import './mainPage.scss';
import example from '../../images/example.jpg';

//components
import BookItem from '../../components/BookItem/BookItem';
import SearchForm from '../../components/searchForm/SearchForm';

const MainPage = () => {

    const ExampleBooks = [
        {
            id: 1,
            img: example,
            title: 'Harry Potter',
            author: 'J.K.Rowling',
            rating: 5
        },

        {
            id: 2,
            img: example,
            title: 'Harry Potter',
            author: 'J.K.Rowling',
            rating: 5
        },

        {
            id: 3,
            img: example,
            title: 'Harry Potter',
            author: 'J.K.Rowling',
            rating: 5
        }
    ]
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo__info">
                        <h1 className="promo__title">The Library - everything about books</h1>
                        <p className="promo__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem enim molestiae molestias corporis deleniti sequi incidunt eligendi voluptas harum reiciendis officia voluptate, recusandae praesentium dolorem mollitia? Tempore, non laudantium!</p>
                        <button className="promo__btn main-btn">Order</button>
                    </div>
                    <div className="promo__media">
                        <div className="promo__slider">
                            <img src={example} alt="" className="promo__slider-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="choose">
            <div className="container">
                <div className="choose__title section__title">What to choose</div>
                <SearchForm/>
                <div className="choose__items">
                    {ExampleBooks.map((book) => {
                        return (
                            <BookItem 
                                key={book.id}
                                title={book.title}
                                img={book.img}
                                author={book.author}
                                rating={book.rating}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;