import { useState } from "react";
import './searchBtn.scss';

import search from './search.svg';

const SearchBtn = () => {

    const [isInputShown, setIsInputShown] = useState(false);

    function showForm() {
        setIsInputShown(!isInputShown);
    }
    

    return ( 
        <form action="" className="search-btn">
            <input type="text" className={isInputShown ? "search-btn__input show" : "search-btn__input"} />
            <button className="seatch-btn__button" type="button" onClick={() => showForm()}>
                <img src={search} alt="" className="seatch-btn__button-img" />
            </button>
        </form>
     );
}
 
export default SearchBtn;