import React, { useContext } from 'react';
import { AppContext } from './context';

const SearchForm = () => {
    const { query, handleSearch } = useContext(AppContext);

    return (
        <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <h2>search hacker news</h2>
            <input type='text' className='form-input' value={query} onChange={(e) => handleSearch(e.target.value)} />
        </form>
    );
};

export default SearchForm;
