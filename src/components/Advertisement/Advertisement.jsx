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
        <div className="bulletin-container" id={id}>
            <div className="bulletin-left">
                <Label
                    attachedElemId={id}
                    className="bulletin-header"
                    status={'head'}
                    text={header}
                />
                {text && (
                    <Label
                        attachedElemId={id}
                        className="bulletin-text"
                        status={'info'}
                        text={text}
                    />
                )}
                {photo && (
                    <div
                        className="bulletin-photo"
                        style={{
                            backgroundImage: `url(${LZString.decompress(photo)})`,
                        }}
                    ></div>
                )}
                {!photo && (
                    <div className="bulletin-nophoto"></div>
                )}
            </div>
            <div className="bulletin-right">
                {phone && (
                    <Label
                        attachedElemId={id}
                        className="bulletin-phone"
                        status={'phone'}
                        text={phone}
                        withIcon={true}
                    />
                )}
                {city && (
                    <Label
                        attachedElemId={id}
                        className="bulletin-city"
                        status={'city'}
                        text={city}
                        withIcon={true}
                    />
                )}
                <Button
                    className="bulletin-delete"
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
