import React from 'react';
import PropTypes from 'prop-types';
import './Toggles.scss';

export const Toggle = ({ label, description, size = 'md', color = 'primary', ...rest }) => {
    return (
        <label className={`sf-toggle sf-toggle--${size} sf-toggle--${color}`}>
            <input type="checkbox" className="sf-toggle__input" {...rest} />
            <span className="sf-toggle__track">
                <span className="sf-toggle__thumb" />
            </span>
            <span className="sf-toggle__content">
                {label && <span className="sf-toggle__label">{label}</span>}
                {description && <span className="sf-toggle__description">{description}</span>}
            </span>
        </label>
    );
};

Toggle.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),
};


