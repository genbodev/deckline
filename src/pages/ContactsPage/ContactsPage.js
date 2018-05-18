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
import Inputmask from "inputmask";
import swal from 'sweetalert2'
import CONFIG from "../../config";
import $ from 'jquery';

export const {SITE_KEY} = CONFIG;
export const {HOST} = CONFIG;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{lat: 52.790526, lng: 103.592413}}
    >
        {props.isMarkerShown && <Marker position={{lat: 52.790526, lng: 103.592413}}/>}
    </GoogleMap>
));

const validator = require('validator');


class ContactsPage extends Component {
    static defaultProps = {
        name: '',
        email: '',
        phone: '',
        comment: 'Запросить прайс-лист на продукцию',
        captcha: ''
    };
    state = {
        name: this.props.name,
        email: this.props.email,
        phone: this.props.phone,
        comment: this.props.comment,

        isNameValid: false,
        isEmailValid: false,
        isPhoneValid: false,
        isCommentValid: true,

        defaultData: {
            address : "Иркутская обл. г.Усолье-Сибирское, район Усолье-Сибирского Химфарм завода",
            phone : "(39543) 52953, 52952",
            email : "baikaltexcom@rambler.ru",
            workingHours : "Понедельник - Пятница - 09:00 до 18:00",
            weekend : "Суббота, Воскресенье - Выходной"
        }
    };
    handleOnNameChange = (e) => this.onNameChange(e);
    handleOnEmailChange = (e) => this.onEmailChange(e);
    handleOnPhoneChange = (e) => this.onPhoneChange(e);
    handleOnCommentChange = (e) => this.onCommentChange(e);

    handleSubmit = (e) => this.submit(e);

    onNameChange(e) {
        let val = e.target.value;
        this.setState({name: val, isNameValid: !validator.isEmpty(val)});
    }

    onEmailChange(e) {
        let val = e.target.value;
        if (val !== '') {
            this.setState({email: val, isEmailValid: validator.isEmail(val)});
        }
    }

    onPhoneChange(e) {
        let val = e.target.value;
        let phone = parseInt(val.replace(/\D+/g, ''), 10);
        this.setState({phone: phone, isPhoneValid: validator.isMobilePhone(phone + '', 'ru-RU')});
    }

    onCommentChange(e) {
        let val = e.target.value;
        this.setState({comment: val, isCommentValid: !validator.isEmpty(val)});
    }

    submit(e) {
        e.preventDefault();
        if (this.state.isNameValid === true &&
            this.state.isEmailValid === true &&
            this.state.isPhoneValid === true &&
            this.state.isCommentValid === true) {

            console.log('All fields is valid!');

            let ajaxurl = HOST + 'wp-admin/admin-ajax.php';
            let name = this.state.name;
            let email = this.state.email;
            let phone = this.state.phone;
            let comment = this.state.comment;

            $.ajax({
                type: "POST",
                url: ajaxurl + "?action=send_mail",
                data: {"name": name, "email": email, "phone": phone, "comment": comment},
                cache: false,
                dataType: 'json',
                success: function (response) {
                    console.log(response);
                    swal(
                        'Успешно!',
                        'Письмо отправлено',
                        'success'
                    )
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
            });

        } else {
            let msg = '';
            if (this.state.isNameValid === false) {
                msg = 'Кажется Вы не ввели Ваше имя...';
            }
            if (this.state.isEmailValid === false) {
                msg = 'Кажется Вы не правильно ввели E-mail';
            }
            if (this.state.isPhoneValid === false) {
                msg = 'Кажется Вы не правильно ввели номер телефона';
            }
            if (this.state.isCommentValid === false) {
                msg = 'Кажется Вы не ввели комментарий';
            }
            swal({
                type: 'error',
                title: 'Ошибка',
                text: 'Что-то пошло не так!',
                footer: msg,
            })
        }
    }

    componentDidMount() {
        Inputmask({'mask': '(999) 999-99-99'}).mask(document.getElementById('phone'));
    }

    render() {
        console.log(`data`, this.props.data);
        const {address, phone, email, workingHours, weekend} = this.state.defaultData;
        const {data} = this.props;
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
                                                        type="text"
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
                                                            placeholder="Запросить прайс-лист на продукцию"
                                                            rows="10"
                                                            value={this.state.comment}
                                                            onChange={this.handleOnCommentChange}
                                                        />
                                                    </FormGroup>
                                                    <br/>

                                                    <Button bsStyle="success" type="submit">Отправить</Button>
                                                </form>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="contacts-info-wrapper">

                                                <div className="contacts-info-office">
                                                    <h3 className="header-accent"><strong>Офис</strong></h3>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-map-marker-alt"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Адрес: </strong> {(data && data['opt-textarea-address']) ? data['opt-textarea-address'] : address}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-office-icon-text-wrapper">
                                                        <div className="contacts-info-office-icon">
                                                            <i className="fas fa-phone"/>
                                                        </div>
                                                        <div className="contacts-info-office-text">
                                                            <p>
                                                                <strong>Телефон: </strong>{(data && data['opt-text-numeric-phone']) ? data['opt-text-numeric-phone'] : phone}
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
                                                                href="mailto:baikaltexcom@rambler.ru">{(data && data['opt-text-user-email']) ? data['opt-text-user-email'] : email}</a>
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
                                                                {(data && data['opt-textarea-working-hours']) ? data['opt-textarea-working-hours'] : workingHours}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="contacts-info-time-icon-text-wrapper">
                                                        <div className="contacts-info-time-icon">
                                                            <i className="fas fa-clock"/>
                                                        </div>
                                                        <div className="contacts-info-time-text">
                                                            <p>
                                                                {(data && data['opt-textarea-weekend']) ? data['opt-textarea-weekend'] : weekend}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
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
    const {data} = state.admin;
    return {
        data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);