import './searchForm.scss';
import { useGlobalContext } from '../../context';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const SearchForm = () => {

    // const {setSearchTerm, setResultTitle} = useGlobalContext();
    // const searchText = useRef(null);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     setSearchTerm.current.focus()
    // }, []);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     let tempSearchTerm = searchText.current.value.trim();

    //     if (tempSearchTerm.length === 0) {
    //         setSearchTerm("the lost world");
    //         setResultTitle("please enter smth.....")
    //     } else {
    //         setSearchTerm(searchText.current.value)
    //     }

    //     navigate("/book");
    // }

    // return ( 
    //     <form action="" className="search-form" onSubmit={handleSubmit}>
    //         <input type="text" className="search-form__input" ref={searchText}/>
            
    //         <button type='submit' className="search-form__btn main-btn" onClick={handleSubmit}>search</button>
    //     </form>
    //  );
}
 
export default SearchForm;