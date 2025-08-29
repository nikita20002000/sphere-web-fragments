import React from 'react';
import './Buttons.scss';

export const Button = ({ className, children, onClick }) => {
    return (
        <button className={`bt ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

