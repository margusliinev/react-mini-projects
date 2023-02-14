import { useContext } from 'react';
import { AppContext } from '../context';
import Loading from './Loading';

const CocktailList = () => {
    const { loading, cocktails } = useContext(AppContext);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='cocktails'>
            <h4 className='cocktails-title'>Cocktails</h4>
            <div className='cocktails-container'>
                {cocktails.map(({ idDrink, strDrinkThumb, strDrink, strGlass, strAlcoholic }) => {
                    return (
                        <article key={idDrink} className='cocktail'>
                            <img src={strDrinkThumb} alt={strDrink} className='cocktail-img' />
                            <div className='cocktail-info'>
                                <h4>{strDrink}</h4>
                                <h4 className='cocktail-glass'>{strGlass}</h4>
                                <h6 className='cocktail-desc'>{strAlcoholic}</h6>
                                <button type='button'>Details</button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default CocktailList;
