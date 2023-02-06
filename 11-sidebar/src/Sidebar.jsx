import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { AppContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useContext(AppContext);

    return (
        <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className='sidebar-header'>
                <h2 className='logo'>
                    Margus<span>Liinev</span>
                </h2>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links'>
                {links.map(({ id, url, text, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <ul className='social-icons'>
                {social.map(({ id, url, icon }) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
