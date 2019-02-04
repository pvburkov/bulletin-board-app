import './TextArea.css';

import PropTypes from 'prop-types';
import React from 'react';

const TextArea = ({
    className,
    handleChange,
    maxLength,
    rows,
}) => {
    return (
        <textarea
            className={['text-area', className].join(' ')}
            maxLength={maxLength}
            onChange={handleChange}
            onBlur={handleChange}
            rows={rows}
        />
    );
};

TextArea.propTypes = {
    className: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    maxLength: PropTypes.number.isRequired,
    rows: PropTypes.number.isRequired,
};

export default TextArea;
