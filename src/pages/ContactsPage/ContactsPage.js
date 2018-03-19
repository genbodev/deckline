import React, { Component, Fragment } from 'react';

import './ContactsPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import FieldGroup from './FieldGroup/FieldGroup'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import validator from 'validator';
import CONFIG from "../../config";
export const { SITE_KEY } = CONFIG;
export const { HOST } = CONFIG;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{lat: 52.763107, lng: 103.637306}}
    >
        {props.isMarkerShown && <Marker position={{lat: 52.763107, lng: 103.637306}}/>}
    </GoogleMap>
));

const Recaptcha = require('react-recaptcha');



class ContactsPage extends Component {
    static defaultProps = {
        name: '',
        email: '',
        phone: '',
        comment: ''
    };
    state = {
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone,
        comment: this.props.comment,

        isNameValid: false,
        isEmailValid: true,
        isPhoneValid: false,
    };
    handleOnNameChange = (e) => this.onNameChange(e);
    handleOnEmailChange = (e) => this.onEmailChange(e);
    handleOnPhoneChange = (e) => this.onPhoneChange(e);
    handleOnCommentChange = (e) => this.onCommentChange(e);

    handleVerifyCallback = (e) => this.verifyCallback(e);
    handleCallback = (e) => this.callback(e);

    handleSubmit = (e) => this.submit(e);

    onNameChange(e) {
        let val = e.target.value;
        this.setState({name: val, isNameValid: validator.isAlpha(val)});
    }

    onEmailChange(e) {
        let val = e.target.value;
        if (val !== '') {
            this.setState({email: val, isEmailValid: validator.isEmail(val)});
        } else {
            this.setState({email: val, isEmailValid: true});
        }
    }

    onPhoneChange(e) {
        let val = e.target.value;
        this.setState({phone: val, isPhoneValid: validator.isMobilePhone(val, 'ru-RU')});
    }

    onCommentChange(e) {
        let val = e.target.value;
        this.setState({comment: val});
    }

    submit(e) {
        e.preventDefault();
        if (this.state.isNameValid === true ||
            this.state.isEmailValid === true ||
            this.state.isPhoneValid === true) {

            console.log('All fields is valid!');

            let formData = new FormData(e.target);

            fetch(HOST +'wp-content/themes/deckline/backend/sendmail.php', {
                method: 'post',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: formData
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log('Request failed', error);
                });
        } else {
            alert('wrong');
        }
    }

    verifyCallback(e) {
        console.log('verify');
    }

    callback(e) {
        console.log('callback');
    }

    render() {
        return (
            <div id="ContactsPage" className="wrapper">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="contacts-map">
                                <Grid fluid className="contacts-map-container">
                                    <MyMapComponent
                                        isMarkerShown
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHHQXm7Ow8z88XbirQ6glbg3dsLIiYDfw&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{height: `100%`}}/>}
                                        containerElement={<div style={{height: `400px`}}/>}
                                        mapElement={<div style={{height: `100%`}}/>}
                                    />
                                </Grid>
                            </div>
                            <div className="contacts-form-info">
                                <Grid>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="contacts-form-wrapper">
                                                <h1>Обратная <strong>Связь</strong></h1>
                                                <form id="contact-form" onSubmit={this.handleSubmit}>
                                                    <FieldGroup
                                                        id="name"
                                                        type="text"
                                                        label="Как Вас зовут?"
                                                        placeholder="Иван Петрович"
                                                        inputGroupIcon="<i class='far fa-comment'></i>"
                                                        value={this.state.name}
                                                        onChange={this.handleOnNameChange}
                                                    />
                                                    <FieldGroup
                                                        id="email"
                                                        type="email"
                                                        label="Email"
                                                        placeholder="my@email.com"
                                                        inputGroupIcon="<i class='fas fa-at'></i>"
                                                        value={this.state.email}
                                                        onChange={this.handleOnEmailChange}
                                                    />
                                                    <FieldGroup
                                                        id="phone"
                                                        type="text"
                                                        label="Контактный телефон"
                                                        placeholder="1234567890"
                                                        inputGroupIcon="<i class='fas fa-phone'></i>"
                                                        value={this.state.phone}
                                                        onChange={this.handleOnPhoneChange}
                                                    />
                                                    <FormGroup>
                                                        <ControlLabel>Сообщение</ControlLabel>
                                                        <FormControl
                                                            id="comment"
                                                            componentClass="textarea"
                                                            placeholder="Как стать Вашим партнером?"
                                                            rows="10"
                                                            value={this.state.comment}
                                                            onChange={this.handleOnCommentChange}
                                                        />
                                                    </FormGroup>
                                                    <Recaptcha
                                                        sitekey={SITE_KEY}
                                                        render="explicit"
                                                        verifyCallback={this.handleVerifyCallback}
                                                        onloadCallback={this.handleCallback}
                                                    />
                                                    <br/>

                                                    <Button bsStyle="success" type="submit">Отправить</Button>
                                                </form>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="contacts-info-wrapper">
                                                <div>
                                                    <p>
                                                        В настоящее время DECKLINE GROUP – успешная компания. Этот успех
                                                        мы
                                                        заслужили
                                                        своим трудом, ответственностью, инновационным подходом. Мы
                                                        продолжаем свое
                                                        развитие и готовы к новым достижениям.
                                                    </p>
                                                </div>
                                                <hr/>
                                                <div className="contacts-info-office">
                                                    <h3 className="header-accent"><strong>Офис</strong></h3>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-map-marker-alt"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Адрес: </strong>665458 г. Усолье-Сибирское, ул.
                                                                Шевченко 12
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-phone"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Телефон: </strong>8-902-5-677-789
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-phone"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Телефон: </strong>+7 (39543) 52-9-52
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-envelope"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Email: </strong><a
                                                                href="mailto:baikaltexcom@rambler.ru">baikaltexcom@rambler.ru</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="contacts-info-time">
                                                    <h3 className="header-accent">Рабочее <strong>Время</strong></h3>
                                                    <div className="contacts-info-time-icon-text-wrapper">
                                                        <div className="contacts-info-time-icon">
                                                            <i className="fas fa-clock"/>
                                                        </div>
                                                        <div className="contacts-info-time-text">
                                                            <p>
                                                                Понедельник - Пятница - 09:00 до 18:00
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-time-icon-text-wrapper">
                                                        <div className="contacts-info-time-icon">
                                                            <i className="fas fa-clock"/>
                                                        </div>
                                                        <div className="contacts-info-time-text">
                                                            <p>
                                                                Суббота, Воскресенье - Выходной
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="contacts-info-requisites">
                                                    <h3 className="header-accent"><strong>Реквизиты</strong></h3>
                                                    <p>ООО "СибЛесСтрой"</p>
                                                    <p><strong>Адрес: </strong>665458 г. Усолье-Сибирское, ул. Шевченко
                                                        12
                                                    </p>
                                                    <br/>
                                                    <p><strong>ИНН: </strong>3819018599</p>
                                                    <p><strong>КПП: </strong>381901001</p>
                                                    <p><strong>ОГРН: </strong>1073819000420</p>
                                                    <br/>
                                                    <p><strong>Расчетный счет: </strong>40702810434150000082</p>
                                                    <p><strong>Банк: </strong>Филиал "АТБ" (ОАО) в г.Улан-Удэ ОО№111 в
                                                        г.Усолье-Сибирское</p>
                                                    <p><strong>Корреспондентский счёт: </strong>30101810700000000744</p>
                                                    <p><strong>БИК: </strong>048142744</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <ScrollTop/>
                        </Fragment>
                    </StickyContainer>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);