import './Button.css';

import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
    className,
    children,
    onClick,
    type,
}) => {
    const btnProps = {
        className: [className, 'btn'].join(' '),
    };

    if (type === 'submit') {
        btnProps.type = type;
    } else {
        btnProps.onClick = onClick;
    }

    return (
        <button 
            {...btnProps}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
