import './Select.css';

import PropTypes from 'prop-types';
import React from 'react';

function onClear() {
    document.querySelector('select.select').value = '';     
}

const Select = ({
    className,
    handleChange,
    handleClear,
    selectData,
    value,
}) => (
    <div className='select-container'>
        <select
            className={['select', className].join(' ')}
            value={value}
            onChange={handleChange}
        >
            <option 
                className="option empty-option"
                disabled={true}
                value=""
            ></option>
            {selectData.map((elem, index) => (
                <option
                    className="option"
                    key={index}
                    value={elem}
                >
                    {elem}
                </option>
            ))}
        </select>
        {value && (
            <div
                className="cross"
                onClick={() => {
                    onClear();
                    handleClear();
                }}
            ></div>
        )}
    </div>
);

Select.propTypes = {
    className: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleClear: PropTypes.func.isRequired,
    selectData: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
};

export default Select;
