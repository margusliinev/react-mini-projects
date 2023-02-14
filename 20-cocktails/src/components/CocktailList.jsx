import { useContext } from 'react';
import { AppContext } from '../context';
import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = () => {
    const { loading, cocktails } = useContext(AppContext);

    if (loading) {
        return <Loading />;
    }

    if (cocktails.length < 1) {
        return <h4 className='fetch-error'>no cocktails matched your search criteria</h4>;
    }

    return (
        <div className='cocktails'>
            <h4 className='cocktails-title'>Cocktails</h4>
            <div className='cocktails-container'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default CocktailList;
