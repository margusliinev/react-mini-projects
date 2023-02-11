import React, { useContext } from 'react';
import { AppContext } from './context';

const Buttons = () => {
    const { isLoading, page, nbPages, handlePage } = useContext(AppContext);

    return (
        <div className='btn-container'>
            <button disabled={isLoading} onClick={() => handlePage('dec')}>
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button disabled={isLoading} onClick={() => handlePage('inc')}>
                next
            </button>
        </div>
    );
};

export default Buttons;
