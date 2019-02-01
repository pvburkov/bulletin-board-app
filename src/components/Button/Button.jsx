import './Button.css';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * Stateless configurable 'Button' component
 */
const Button = ({
    className,
    children,
    onClick
}) => (
    <button 
        className={className}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
};

export default Button;
