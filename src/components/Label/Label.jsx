import './Label.css';

import PropTypes from 'prop-types';
import React from 'react';

const Label = ({
    attachedElemId,
    className,
    status,
    text,
    withIcon,
}) => (
    <label
        className={['label', className, status, (withIcon) ? 'with-icon' : ''].join(' ')}
        htmlFor={attachedElemId}
    >
        {withIcon && (
            <div className={['icon', status].join(' ')}></div>
        )}
        <>
            {(typeof text === 'string')
                ? (
                    <p className="text0">
                        {text}
                    </p>
                )
                : text.map((str, index) => (
                    <p
                        className={`text${index}`}
                        key={index}
                    >
                        {str}
                    </p>
                ))
            }
        </>
    </label>
);

Label.propTypes = {
    attachedElemId: PropTypes.string.isRequired,
    className: PropTypes.string,
    status: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    withIcon: PropTypes.bool,
};

export default Label;
