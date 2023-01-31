import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {data.map((dataItem) => {
                        return <SingleQuestion key={dataItem.id} {...dataItem} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
