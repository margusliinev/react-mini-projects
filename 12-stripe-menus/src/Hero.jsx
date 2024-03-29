import React, { useContext } from 'react';
import phoneImg from './images/phone.svg';
import { AppContext } from './context';

const Hero = () => {
    const { closeSubmenu } = useContext(AppContext);
    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>Payments infrastructure for the internet</h1>
                    <p>Millions of companies of all sizes-from startups to Fortune 500s-use Stripe's software and APIs to accept payments, send payouts, and manage their business onine.</p>
                    <button className='btn'>Start now</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} className='phone-img' alt='phone image' />
                </article>
            </div>
        </section>
    );
};

export default Hero;
