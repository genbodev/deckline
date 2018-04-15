import React, { Component } from 'react';
import { Link } from 'react-router';

import './FooterComponent.css';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import logoFooter from './logo-90-prz.png';
import InstagramEmbed from 'react-instagram-embed';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultData : {
                phone : "(39543) 52953, 52952",
                address : "Иркутская обл. г.Усолье-Сибирское, район Усолье-Сибирского Химфарм завода!!!",
                email : "baikaltexcom@rambler.ru",
                workingHours : "Понедельник - Пятница - 09:00 до 18:00",
                copyrightText : "© 2018 СибЛесСтрой - Все права защищены.",
                descriptionText : "Производитель изделий из ДПК, террасная доска, ограждения."
            }
        };
    }
    render() {
        const {data} = this.props;
        const {address, phone, email, workingHours, copyrightText, descriptionText } = this.state.defaultData;

        return (
            <div id="FooterComponent">
                <div className="footer-first-wrapper">
                    <Grid>
                        <Row>
                            <Col md={6} lg={4}>
                                <h4>Контакты</h4>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Адрес: </strong> {(data && data['opt-textarea-address']) ? data['opt-textarea-address'] : address}
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong><span
                                            className="footer-first-text-phone">{(data && data['opt-text-numeric-phone']) ? data['opt-text-numeric-phone'] : phone}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>E-mail: </strong><a
                                            href="mailto:baikaltexcom@rambler.ru">{(data && data['opt-text-user-email']) ? data['opt-text-user-email'] : email}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Рабочее время: </strong>{(data && data['opt-textarea-working-hours']) ? data['opt-textarea-working-hours'] : workingHours}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={5}>
                                <h4>Дополнительно</h4>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="/files/ogr-price.xls">ДПК ограждения, прайс-лист</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="/files/doska-price.xls">ДПК террасная доска, прайс-лист</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="/files/instr.doc">Скачать инструкцию по монтажу</a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={3} xsHidden smHidden mdHidden>
                                <div>
                                    <InstagramEmbed
                                        url='https://www.instagram.com/p/Bf503bDnHVV/?taken-by=deckline100'
                                        maxWidth={320}
                                        hideCaption={false}
                                        containerTagName='div'
                                        protocol=''
                                        onLoading={() => {
                                        }}
                                        onSuccess={() => {
                                        }}
                                        onAfterRender={() => {
                                        }}
                                        onFailure={() => {
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="footer-second-wrapper">
                    <Grid>
                        <Row>
                            <Col sm={12} md={6}>
                                <div className="footer-second-logo-info-wrapper">
                                    <div className="footer-second-logo">
                                        <img src={logoFooter} alt="footer-logo"/>
                                    </div>
                                    <div className="footer-second-info">
                                        <p>{(data && data['opt-textarea-html-copyright']) ? <span dangerouslySetInnerHTML={{__html : data['opt-textarea-html-copyright']}}></span> : copyrightText}</p>
                                        <p>{(data && data['opt-textarea-html-description']) ? <span dangerouslySetInnerHTML={{__html : data['opt-textarea-html-description']}}></span> : descriptionText}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} xsHidden smHidden>
                                <div className="footer-second-links-wrapper">
                                    <p><Link to="#">Карта сайта</Link></p>
                                    <p><Link to="/contacts">Контакты</Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);