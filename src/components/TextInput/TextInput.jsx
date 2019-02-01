import './TextInput.css';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Stateless 'TextInput' component
 */
const TextInput = ({
    className,
}) => {
    return (
        <input
            className={className}
            maxLength={40}
            placeholder={'Введите данные'}
            type="text"
        >
        </input>
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
};

export default TextInput;
