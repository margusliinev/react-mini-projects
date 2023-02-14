import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='error-page'>
            <h2>oops! it's a dead end</h2>
            <Link to={'/'} className='go-home-btn'>
                Go Home
            </Link>
        </section>
    );
};

export default Error;
