import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className='about-page'>
                <p>
                    Cocktails is a website where you can get more information about your favorite cocktail.
                    <br /> Type the name of your favorite cocktail in the search bar and click on details to find out more about your drink. <br />
                    Search bar is located at the home page so go there.
                </p>
                <Link to={'/'} className='go-home-btn'>
                    Go Home
                </Link>
            </section>
        </>
    );
};

export default About;
