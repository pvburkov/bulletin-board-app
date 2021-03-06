import './TextInput.css';

import PropTypes from 'prop-types';
import React from 'react';

const TextInput = ({
    className,
    handleChange,
    maxLength,
    placeholder,
}) => {
    return (
        <input
            className={['text-input', className].join(' ')}
            maxLength={maxLength}
            onBlur={handleChange}
            onChange={handleChange}
            placeholder={placeholder}
            type="text"
        />
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    maxLength: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
};

export default TextInput;
