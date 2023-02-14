const SearchForm = () => {
    return (
        <div>
            <form className='form'>
                <label htmlFor='search' className='search-label'>
                    Search Your Favorite Cocktail
                </label>
                <input type='text' className='search-input' name='search' id='search' />
            </form>
        </div>
    );
};

export default SearchForm;
