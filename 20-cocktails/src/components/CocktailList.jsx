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
                                <h3 className='cocktail-name'>{strDrink}</h3>
                                <h5 className='cocktail-glass'>{strGlass}</h5>
                                <h6 className='cocktail-desc'>{strAlcoholic}</h6>
                                <button type='button' className='cocktail-button'>
                                    Details
                                </button>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default CocktailList;
