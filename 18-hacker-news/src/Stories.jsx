import React, { useContext } from 'react';
import { AppContext } from './context';

const Stories = () => {
    const { isLoading, hits } = useContext(AppContext);

    if (isLoading) {
        return <div className='loading'></div>;
    }

    return (
        <section className='stories'>
            {hits.map(({ objectID, title, num_comments, url, points, author }) => {
                return (
                    <article className='story' key={objectID}>
                        <h4 className='title'>{title}</h4>
                        <p className='info'>
                            {points} points by{' '}
                            <span>
                                {author} | <span>{num_comments} comments</span>
                            </span>
                        </p>
                        <div>
                            <a href={url} target='_blank' className='read-link' rel='noopener noreferrer'>
                                read more
                            </a>
                            <button className='remove-btn'>remove</button>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Stories;
