import React, { useContext } from 'react';
import { AppContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useContext(AppContext);

    return (
        <div>
            <form className='form'>
                <label htmlFor='search' className='search-label'>
                    Search Your Favorite Cocktail
                </label>
                <input type='text' className='search-input' name='search' id='search' onChange={(e) => setSearchTerm(e.target.value)} />
            </form>
        </div>
    );
};

export default SearchForm;
