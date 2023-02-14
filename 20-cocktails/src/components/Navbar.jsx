import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <h5 className='nav-title'>
                    The<span>Cocktail</span>DB
                </h5>
                <ul className='nav-links'>
                    <li>
                        <Link to={'/'} className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'about'} className='nav-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
