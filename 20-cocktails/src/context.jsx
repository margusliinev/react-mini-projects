import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    const [searchTerm, setSearchTerm] = useState('a');

    const fetchCocktails = async () => {
        setLoading(true);
        const response = await axios(`${url}${searchTerm}`).catch((err) => console.log(err));
        const data = response.data.drinks;
        if (data) {
            const drinks = data.map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => {
                return { id: idDrink, name: strDrink, image: strDrinkThumb, category: strAlcoholic, glass: strGlass };
            });
            setCocktails(drinks);
        } else {
            setCocktails([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCocktails();
    }, [searchTerm]);

    return <AppContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
