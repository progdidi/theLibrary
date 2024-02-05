import './bookItem.scss';
import { NavLink } from 'react-router-dom';

const BookItem = ({cover_img, rating, title, author, id}) => {
    return ( 
        <NavLink to={`/book/${id}`} className="book-item">
            <img src={cover_img} alt="" className="book-item__img" />
            <div className="book-item__rating">{rating}</div>
            <h5 className="book-item__title">{title}</h5>
            <h6 className="book-item__author">{author}</h6>
        </NavLink>
     );
}
 
export default BookItem;