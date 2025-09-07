import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useTheme } from '../../../context/ThemeContext';
import { getCategoryIcon } from '../../../utils/categoryIcons.jsx';
import './Menu.scss';

const Menu = ({categories = {}, selectedCategory, onSelect}) => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Menu Button */}
            <button 
                className="menu-button" 
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {getCategoryIcon(isOpen ? 'close' : 'menu')}
            </button>

            {/* Menu Overlay */}
            <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="menu">
                    <div className='menu-nav'>
                        {/* Search item at the top */}
                        <div
                            className={`menu-nav__item ${selectedCategory === 'search' ? 'active' : ''}`}
                            onClick={() => {
                                onSelect('search');
                                toggleMenu();
                            }}>

                            <div className='menu-nav__item-icon'>
                                {getCategoryIcon('search')}
                            </div>
                            <div className="menu-nav__item-text">
                                <span>Search</span>
                            </div>
                        </div>

                        {Object.entries(categories).map(([key, category]) => (
                            <div
                                key={key}
                                className={`menu-nav__item ${selectedCategory === key ? 'active' : ''}`}
                                onClick={() => {
                                    onSelect(key);
                                    toggleMenu();
                                }}>

                                <div className='menu-nav__item-icon'>
                                    {getCategoryIcon(key)}
                                </div>

                                <div className="menu-nav__item-text">
                                    <span>{category.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="menu-footer">
                        <div 
                            className="menu-nav__item color-picker"
                            onClick={toggleTheme}
                            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                        >
                            <div className='menu-nav__item-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
                                    fill={theme === 'light' ? 'black' : 'white'}
                                    className="bi bi-palette2" viewBox="0 0 16 16">
                                    <path
                                        d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a3 3 0 0 1-2.121-.879A3 3 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15 15v-4H9.258l-4.015 4zM0 .5v12.495zm0 12.495V13z"/>
                                </svg>
                            </div>
                            <div className="menu-nav__item-text">
                                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                            </div>
                        </div>

                        <div className="menu-nav__item">
                            <div className='menu-nav__item-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-github" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Type check
Menu.propTypes = {
    categories: PropTypes.object.isRequired,
    selectedCategory: PropTypes.string,
    onSelect: PropTypes.func.isRequired
};

// Default values
Menu.defaultProps = {
    selectedCategory: ''
};

export default Menu;
