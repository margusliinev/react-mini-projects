import React, { useContext } from 'react';
import { AppContext } from './context';
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
    const { loading } = useContext(AppContext);
    if (loading) {
        return (
            <div className='loading'>
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    );
}

export default App;
