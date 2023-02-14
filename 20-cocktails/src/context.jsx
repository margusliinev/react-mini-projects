import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);

    const fetchCocktails = async (url) => {
        const response = await axios(url).catch((err) => console.log(err));
        if (response) {
            setLoading(false);
            setCocktails(response.data.drinks);
        } else {
            throw new Error('There was a error');
        }
    };

    useEffect(() => {
        fetchCocktails(url);
    }, []);

    return <AppContext.Provider value={{ loading, cocktails }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
