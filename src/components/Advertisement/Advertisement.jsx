import './Advertisement.css';

import LZString from 'lz-string';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/Button';
import Label from '../Label/Label';

import CONSTS from '../../constants/constants';

const Advertisement = ({
    advertisement,
    deleteAdvertisement,
}) => {
    const {
        city,
        id,
        header,
        phone,
        photo,
        text,
    } = advertisement;

    return (
        <div className="ad-container" id={id}>
            <div className="ad-left">
                <Label
                    attachedElemId={id}
                    className="ad-header"
                    status={'head'}
                    text={header}
                />
                {text && (
                    <Label
                        attachedElemId={id}
                        className="ad-text"
                        status={'info'}
                        text={text}
                    />
                )}
                {photo && (
                    <div
                        className="ad-photo"
                        style={{
                            backgroundImage: `url(${LZString.decompress(photo)})`,
                        }}
                    ></div>
                )}
            </div>
            <div className="ad-right">
                {phone && (
                    <Label
                        attachedElemId={id}
                        className="ad-phone"
                        status={'phone'}
                        text={phone}
                        withIcon={true}
                    />
                )}
                {city && (
                    <Label
                        attachedElemId={id}
                        className="ad-city"
                        status={'city'}
                        text={city}
                        withIcon={true}
                    />
                )}
                <Button
                    className="ad-delete"
                    onClick={() => deleteAdvertisement(id)}
                    type="button"
                >
                    {CONSTS.buttons.delete}
                </Button>
            </div>
        </div>
    );
};

Advertisement.propTypes = {
    advertisement: PropTypes.object.isRequired,
    deleteAdvertisement: PropTypes.func.isRequired,
};

export default Advertisement;
