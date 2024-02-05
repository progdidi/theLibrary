import React, {useState, useContext, useEffect, useCallback} from "react";

const URL = "https://openlibrary.org/search.json?title="; 


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);

        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            console.log(docs);

            if(docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1) {
                    setResultTitle("Your search Result")
                } else {
                    setResultTitle("No result")
                }
            } else {
                setBooks([]);
                setResultTitle("No result")
            }
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);


    return (
        <AppContext.Provider value = {{
            loading, books, searchTerm, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};

 

