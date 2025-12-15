import React from 'react';
import PropTypes from 'prop-types';
import './Inputs.scss';

export const Input = ({
    label,
    helperText,
    error,
    size = 'md',
    variant = 'filled',
    leftIcon,
    rightIcon,
    ...rest
}) => {
    const hasError = Boolean(error);

    return (
        <label className={`sf-input sf-input--${variant} sf-input--${size} ${hasError ? 'sf-input--error' : ''}`}>
            {label && <span className="sf-input__label">{label}</span>}
            <div className="sf-input__wrapper">
                {leftIcon && <span className="sf-input__icon sf-input__icon--left">{leftIcon}</span>}
                <input
                    className="sf-input__field"
                    {...rest}
                />
                {rightIcon && <span className="sf-input__icon sf-input__icon--right">{rightIcon}</span>}
            </div>
            {(helperText || error) && (
                <span className={`sf-input__helper ${hasError ? 'sf-input__helper--error' : ''}`}>
                    {error || helperText}
                </span>
            )}
        </label>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    helperText: PropTypes.string,
    error: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.oneOf(['filled', 'outline', 'ghost']),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};


