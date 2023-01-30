import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const prevReview = () => {
        setIndex((index) => {
            index--;
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        });
    };
    const nextReview = () => {
        setIndex((index) => {
            index++;
            if (index > people.length - 1) {
                index = 0;
            }
            return index;
        });
    };
    const randomReview = () => {
        setIndex((index) => {
            let newIndex = Math.floor(Math.random() * 4);
            while (newIndex === index) {
                newIndex = Math.floor(Math.random() * 4);
            }
            return newIndex;
        });
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomReview}>
                surprise me
            </button>
        </article>
    );
};

export default Review;
