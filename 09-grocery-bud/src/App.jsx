import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setAlert({ show: true, msg: 'please enter value', type: 'danger' });
            setTimeout(() => {
                setAlert({ show: false, msg: '' });
            }, 2000);
        } else if (name && isEditing) {
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );
            setIsEditing(false);
            setEditID(null);
            setName('');
            setAlert({ show: true, msg: 'Item has been updated', type: 'success' });
            setTimeout(() => {
                setAlert({ show: false, msg: '' });
            }, 2000);
        } else {
            setAlert({ show: true, msg: 'Item added to the list', type: 'success' });
            setTimeout(() => {
                setAlert({ show: false, msg: '' });
            }, 2000);
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
        }
    };

    const clearList = () => {
        setAlert({ show: true, msg: 'items removed from the list', type: 'danger' });
        setTimeout(() => {
            setAlert({ show: false, msg: '' });
        }, 2000);
        setList([]);
    };

    const removeItem = (id) => {
        setAlert({ show: true, msg: 'item removed from the list', type: 'danger' });
        setTimeout(() => {
            setAlert({ show: false, msg: '' });
        }, 2000);
        setList(list.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        setAlert({ show: true, msg: 'item has been updated', type: 'success' });
        setTimeout(() => {
            setAlert({ show: false, msg: '' });
        }, 2000);
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    return (
        <section className='section-center'>
            <form onSubmit={handleSubmit} className='grocery-form'>
                <Alert {...alert} />
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input type='text' className='grocery' placeholder='e.g eggs' value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='grocery-container'>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <button className='clear-btn' onClick={clearList}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;
