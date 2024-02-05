import './singleBookPage.scss';
import exampleBooks from '../../helpers/exampleBooks';

const SingleBookPage = ({img, title, author, rating}) => {
    return ( 
        <>
            <section className="book">
                <div className="container">
                    <div className="book__inner">
                        <img src={exampleBooks[0].img} alt="" className="book__img" />
                        <div className="book__info">
                            <h3 className="book__title">{exampleBooks[0].title}</h3>
                            <h4 className="book__author">{exampleBooks[0].author}</h4>
                            <div className="book__rating">{exampleBooks[0].rating}</div>
                            <p className="book__descr">{exampleBooks[0].descr}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default SingleBookPage;