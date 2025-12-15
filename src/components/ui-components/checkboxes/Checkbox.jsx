import React from 'react';
import PropTypes from 'prop-types';
import './Checkboxes.scss';

export const Checkbox = ({ label, description, size = 'md', state = 'default', ...rest }) => {
    return (
        <label className={`sf-checkbox sf-checkbox--${size} sf-checkbox--${state}`}>
            <input type="checkbox" className="sf-checkbox__input" {...rest} />
            <span className="sf-checkbox__box" />
            <span className="sf-checkbox__content">
                {label && <span className="sf-checkbox__label">{label}</span>}
                {description && <span className="sf-checkbox__description">{description}</span>}
            </span>
        </label>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    state: PropTypes.oneOf(['default', 'success', 'danger', 'warning']),
};


