import './App.css';

import LZString from 'lz-string';
import React, { Component } from 'react';
import uniqid from 'uniqid';

import Advertisement from '../Advertisement/Advertisement';
import Button from '../Button/Button';
import Label from '../Label/Label';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';
import TextInput from '../TextInput/TextInput';

import cities from '../../constants/cities';
import CONSTS from '../../constants/constants';

const CONFIRM = 'confirm';
const INFO = 'info';
const WARNING = 'warning';

class App extends Component {
    constructor() {
        super();

        this.state = {
            adverts: JSON.parse(localStorage.getItem('adverts')) || [],
            city: '',
            header: INFO,
            phone: INFO,
            photo: null,
            photoName: null,
            text: INFO,
            newAdvert: {
                city: null,
                header: null,
                phone: null,
                photo: null,
                text: null,
            },
        };

        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeHeader = this.handleChangeHeader.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleClearCity = this.handleClearCity.bind(this);
        this.handleClearPhoto = this.handleClearPhoto.bind(this);
        this.handleDeleteAdvertisement = this.handleDeleteAdvertisement.bind(this);
        this.handleGetPhoto = this.handleGetPhoto.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    bodyLabelText() {
        switch(this.state.text) {
            case CONFIRM:
                return CONSTS.labels.confirm;

            case INFO:
                return CONSTS.labels.advertBodyInfo;
        }
    }

    handleChangeCity(evt) {
        this.setState({
            city: evt.target.value,
            newAdvert: {
                ...this.state.newAdvert,
                city: evt.target.value,
            }
        });
    }

    handleChangeHeader(evt) {
        this.setState({
            header: (evt.target.value === '') ? WARNING : CONFIRM,
            newAdvert: {
                ...this.state.newAdvert,
                header: evt.target.value,
            }
        });
    }

    handleChangePhone(evt) {
        this.setState({
            phone: (evt.target.value === '' || !CONSTS.patterns.phone.test(evt.target.value))
                ? WARNING
                : CONFIRM,
            newAdvert: {
                ...this.state.newAdvert,
                phone: evt.target.value,
            }
        });
    }

    handleChangeText(evt) {
        this.setState({
            text: (evt.target.value === '') ? INFO : CONFIRM,
            newAdvert: {
                ...this.state.newAdvert,
                text: evt.target.value,
            }
        });
    }

    handleClearCity() {
        this.setState({
            city: '',
            newAdvert: {
                ...this.state.newAdvert,
                city: '',
            },
        });
    }

    handleClearPhoto() {
        this.setState({
            photo: null,
            photoName: null,
            newAdvert: {
                ...this.state.newAdvert,
                photo: null,
            },
        });
    }

    handleDeleteAdvertisement(adId) {
        const reducedAds = this.state.adverts.filter((advert) => advert.id !== adId);

        this.setState({
            adverts: reducedAds,
        });
        localStorage.setItem('adverts', JSON.stringify(reducedAds));
    }

    handleGetPhoto(evt) {
        const photo = evt.target.files[0];
        const fileReader = new FileReader();

        fileReader.onload = () => {
            this.setState({
                photo: fileReader.result,
                photoName: photo.name,
                newAdvert: {
                    ...this.state.newAdvert,
                    photo: LZString.compress(fileReader.result),
                },
            });
        };

        if (photo) {
            fileReader.readAsDataURL(photo);
        }
    }

    handleSubmit(evt) {
        evt.preventDefault();
        evt.stopPropagation();

        const {
            header,
            phone,
        } = this.state.newAdvert;

        if (!header || !phone) {
            return;
        }

        const newAdverts = this.state.adverts.slice();
        newAdverts.unshift(this.state.newAdvert);
        newAdverts[0].id = uniqid();

        this.setState({
            adverts: newAdverts,
            city: '',
            header: INFO,
            phone: INFO,
            photo: null,
            text: INFO,
            newAdvert: {
                city: null,
                header: null,
                phone: null,
                photo: null,
                text: null,
            },
        });

        localStorage.setItem('adverts', JSON.stringify(newAdverts));

        evt.target.reset();
    }

    headerLabelText() {
        switch(this.state.header) {
            case CONFIRM:
                return CONSTS.labels.confirm;

            case INFO:
                return CONSTS.labels.advertHeaderInfo;
            
            case WARNING:
                return CONSTS.labels.warnings.emptyField;
        }
    }

    phoneLabelText() {
        switch(this.state.phone) {
            case CONFIRM:
                return CONSTS.labels.confirm;

            case INFO:
                return CONSTS.labels.advertPhoneInfo;
            
            case WARNING:
                return (this.state.newAdvert.phone === '')
                    ? CONSTS.labels.warnings.emptyField
                    : CONSTS.labels.warnings.incorrectFormat;
        }
    }
    
    render() {
        return (
            <>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <header className="form-header">
                        {CONSTS.labels.formHeader}
                    </header>
                    <Label
                        attachedElemId="advert-header"
                        className="advert-header-label"
                        status={INFO}
                        text={CONSTS.labels.advertHeader}
                    />
                    <TextInput
                        className={this.state.header}
                        id="advert-header"
                        handleChange={this.handleChangeHeader}
                        maxLength={CONSTS.textInput.maxLength}
                    />
                    <Label
                        attachedElemId="advert-header"
                        className="advert-header-info"
                        status={this.state.header}
                        text={this.headerLabelText()}
                        withIcon={true}
                    />
                    <Label
                        attachedElemId="advert-body"
                        className="advert-body-label"
                        status={INFO}
                        text={CONSTS.labels.advertBody}
                    />
                    <TextArea
                        className={this.state.text}
                        id="advert-body"
                        handleChange={this.handleChangeText}
                        maxLength={CONSTS.textArea.maxLength}
                        rows={CONSTS.textArea.rows}
                    />
                    <Label
                        attachedElemId="advert-body"
                        className="advert-body-info"
                        status={this.state.text}
                        text={this.bodyLabelText()}
                        withIcon={true}
                    />
                    <Label
                        attachedElemId="advert-phone"
                        className="advert-phone-label"
                        status={INFO}
                        text={CONSTS.labels.advertPhone}
                    />
                    <TextInput
                        className={this.state.phone}
                        id="advert-phone"
                        handleChange={this.handleChangePhone}
                        maxLength={CONSTS.textInput.maxLength}
                        placeholder={CONSTS.placeholders.phone}
                    />
                    <Label
                        attachedElemId="advert-phone"
                        className="advert-phone-info"
                        status={this.state.phone}
                        text={this.phoneLabelText()}
                        withIcon={true}
                    />
                    <Label
                        attachedElemId="advert-city"
                        className="advert-city-label"
                        status={INFO}
                        text={CONSTS.labels.advertCity}
                    />
                    <Select
                        className="advert-city"
                        id="advert-city"
                        handleChange={this.handleChangeCity}
                        handleClear={this.handleClearCity}
                        selectData={cities}
                        value={this.state.city}
                    />
                    {Boolean(this.state.city) && (
                        <Label
                            attachedElemId="advert-city"
                            className="advert-city-info"
                            status={CONFIRM}
                            text={CONSTS.labels.confirm}
                            withIcon={true}
                        />
                    )}
                    <div className="attach-button">
                        <input
                            accept="image/*"
                            id="attach-input"
                            onChange={this.handleGetPhoto}
                            type="file"
                        />
                        <Label
                            attachedElemId="attach-input"
                            className="attach-input"
                            text={CONSTS.buttons.attachPhoto}
                            withIcon={true}
                        />
                    </div>
                    {(this.state.photo) && (
                        <div className="attach-preview">
                            <div
                                className="attach-preview-img"
                                style={{
                                    backgroundImage: `url(${this.state.photo})`,
                                }}
                            ></div>
                            <div className="attach-filename">
                                {this.state.photoName}
                            </div>
                            <div
                                className="attach-delete"
                            >
                                <div
                                    className="attach-delete-btn"
                                    onClick={this.handleClearPhoto}
                                >
                                    {'Удалить'}
                                </div>
                            </div>
                        </div>
                    )}
                    <Button
                        className="submit"
                        onClick={(evt) => evt.preventDefault()}
                        type="submit"
                    >
                        {CONSTS.buttons.send}
                    </Button>
                </form>
                <div
                    className="advert-list"
                    id="ad-list"
                >
                    <header className="ad-list-header">
                        {CONSTS.labels.advertListHeader}
                    </header>
                    {this.state.adverts.map((advert, index) => (
                        <Advertisement
                            advertisement={advert}
                            key={index}
                            deleteAdvertisement={this.handleDeleteAdvertisement}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default App;
