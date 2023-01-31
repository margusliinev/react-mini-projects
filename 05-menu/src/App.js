import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const uniqueCategories = items.reduce(
    (total, current) => {
        if (!total.includes(current.category)) {
            total.push(current.category);
        }
        return total;
    },
    ['all']
);

function App() {
    const [menuItems, setMenuItems] = useState(items);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>our menu</h2>
                    <div className='underline'></div>
                </div>
                <Categories categories={uniqueCategories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
