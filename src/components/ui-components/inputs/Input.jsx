import React from 'react';
import './Inputs.scss';

/**
 * Input component for form fields
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Input type (text, password, email, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {function} props.onChange - Change event handler
 * @param {function} props.onClick - Click event handler
 * @param {boolean} props.disabled - Whether the input is disabled
 * @param {string} props.name - Input name attribute
 * @param {string} props.id - Input id attribute
 * @param {boolean} props.required - Whether the input is required
 * @param {string} props.label - Label text (if provided, will render a label)
 * @param {string} props.icon - Icon class (if provided, will render an icon)
 * @param {string} props.iconPosition - Icon position ('left' or 'right')
 * @param {string} props.helperText - Helper text to display below the input
 * @param {boolean} props.error - Whether the input has an error
 * @returns {JSX.Element} - Rendered component
 */
export const Input = ({ 
    className = '',
    type = 'text',
    placeholder = '',
    value = '',
    onChange = () => {},
    onClick = () => {},
    disabled = false,
    name = '',
    id = '',
    required = false,
    label = '',
    icon = '',
    iconPosition = 'left',
    helperText = '',
    error = false,
    ...rest
}) => {
    // Generate a unique ID if none is provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Determine if we need to render a label
    const hasLabel = label !== '';

    // Determine if we need to render an icon
    const hasIcon = icon !== '';

    // Determine if we need to render helper text
    const hasHelperText = helperText !== '';

    // Build the input class
    const inputClass = `input ${className} ${error ? 'error' : ''} ${hasIcon ? `with-icon icon-${iconPosition}` : ''}`;

    // Build the wrapper class
    const wrapperClass = `input-wrapper ${disabled ? 'disabled' : ''}`;

    return (
        <div className={wrapperClass}>
            {hasLabel && <label htmlFor={inputId} className="input-label">{label}{required && <span className="required">*</span>}</label>}

            <div className="input-container">
                {hasIcon && iconPosition === 'left' && <span className={`input-icon ${icon}`}></span>}

                <input
                    id={inputId}
                    type={type}
                    className={inputClass}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                    disabled={disabled}
                    name={name}
                    required={required}
                    {...rest}
                />

                {hasIcon && iconPosition === 'right' && <span className={`input-icon ${icon}`}></span>}
            </div>

            {hasHelperText && <span className={`helper-text ${error ? 'error' : ''}`}>{helperText}</span>}
        </div>
    );
};
