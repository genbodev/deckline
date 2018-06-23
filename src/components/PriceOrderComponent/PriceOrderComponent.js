import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import swal from 'sweetalert2'

import './PriceOrderComponent.css';
import Inputmask from "inputmask";
import $ from "jquery";
import {HOST} from "../../pages/ContactsPage/ContactsPage";

const validator = require('validator');

class PriceOrderComponent extends Component {

    static defaultProps = {
        name: '',
        email: '',
        phone: '',
        comment: 'Запросить прайс-лист на продукцию'
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
        let phone = val.replace(/\D+/g, '');
        this.setState({phone: phone, isPhoneValid: validator.isMobilePhone(phone + '', 'ru-RU')});
    }

    onCommentChange(e) {
        let val = e.target.value;
        this.setState({comment: val, isCommentValid: !validator.isEmpty(val)});
    }

    getNameValidationState() {
        if (validator.isEmpty(this.state.name)) {
            return 'error';
        } else {
            return 'success';
        }
    }

    getEmailValidationState() {
        if (!validator.isEmail(this.state.email)) {
            return 'error';
        } else {
            return 'success';
        }
    }

    getPhoneValidationState() {
        let phone = parseInt(this.state.phone.replace(/\D+/g, ''), 10);
        if (!validator.isMobilePhone(phone + '', 'ru-RU')) {
            return 'error';
        } else {
            return 'success';
        }
    }

    getCommentValidationState() {
        if (validator.isEmpty(this.state.comment)) {
            return 'error';
        } else {
            return 'success';
        }
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
        Inputmask({'alias': 'email'}).mask(document.getElementById('email'));
    }

    render() {
        return (
            <div id="PriceOrderComponents">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getNameValidationState()}
                    >
                        <FormControl
                            id="name"
                            type="text"
                            value={this.state.name}
                            placeholder="Как Вас зовут?"
                            onChange={this.handleOnNameChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getEmailValidationState()}
                    >
                        <FormControl
                            id="email"
                            type="text"
                            value={this.state.email}
                            placeholder="my@email.com"
                            onChange={this.handleOnEmailChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getPhoneValidationState()}
                    >
                        <FormControl
                            id="phone"
                            type="text"
                            value={this.state.phone}
                            placeholder="1234567890"
                            onChange={this.handleOnPhoneChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <FormGroup
                        controlId="formBasicText"
                        validationState={this.getCommentValidationState()}
                    >
                        <FormControl
                            id="comment"
                            type="text"
                            value={this.state.comment}
                            placeholder="Запрос прайс-листа"
                            onChange={this.handleOnCommentChange}
                        />
                        <FormControl.Feedback/>
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Отправить</Button>
                </form>
            </div>
        );
    }
}

export default PriceOrderComponent;