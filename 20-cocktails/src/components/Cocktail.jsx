import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, image, category, glass }) => {
    return (
        <article className='cocktail'>
            <img src={image} alt={name} className='cocktail-img' />
            <div className='cocktail-info'>
                <h3 className='cocktail-name'>{name}</h3>
                <h5 className='cocktail-glass'>{glass}</h5>
                <h6 className='cocktail-desc'>{category}</h6>
                <Link to={`cocktail/${id}`} className='cocktail-button'>
                    Details
                </Link>
            </div>
        </article>
    );
};

export default Cocktail;
