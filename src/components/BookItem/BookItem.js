import './bookItem.scss';

const BookItem = ({img, rating, title, author}) => {
    return ( 
        <div className="book-item">
            <img src={img} alt="" className="book-item__img" />
            <div className="book-item__rating">{rating}</div>
            <h5 className="book-item__title">{title}</h5>
            <h6 className="book-item__author">{author}</h6>
        </div>
     );
}
 
export default BookItem;