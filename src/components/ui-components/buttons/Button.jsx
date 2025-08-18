import React from 'react';
import './buttons.css'; // Подключаем стили

export const Button = ({ className, children, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

