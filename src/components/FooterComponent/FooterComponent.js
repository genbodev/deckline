import React, { Component } from 'react';
import { Link } from 'react-router';

import './FooterComponent.css';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import logoFooter from './logo-90-prz.png';
import InstagramEmbed from 'react-instagram-embed';

class FooterComponent extends Component {
    render() {
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
                                            <strong>Адрес: </strong>Иркутская обл. г.Усолье-Сибирское, район Усолье-Сибирского Химфарм завода
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
                                            className="footer-first-text-phone">(39543) 52953, 52952</span>
                                        </p>
                                    </div>
                                </div>
                                {/*<div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong>(39543) 52953, 52952
                                        </p>
                                    </div>
                                </div>*/}
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>E-mail: </strong><a
                                            href="mailto:baikaltexcom@rambler.ru">baikaltexcom@rambler.ru</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Рабочее время: </strong>с 09:00 до 18:00
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
                                        <a href="/files/buklet-a4-FINAL.pdf">Скачать каталог продукции</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="/files/albom-tehnicheskih-resheby-deckline-group-2.pdf">Скачать альбом
                                            технических решений</a>
                                    </div>
                                </div>
                                {/*<div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="zakluchenie-po-ispytaniyam-dpk-deckline.pdf">Скачать экспертное
                                            заключение по испытаниям</a>
                                    </div>
                                </div>*/}
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="/files/instrukcia-po-montagu-terrsy.pdf">Скачать инструкцию по монтажу
                                            террасной доски</a>
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
                                        <p>© 2018 СибЛесСтрой - Все права защищены.</p>
                                        <p>Производитель изделий из ДПК, террасная доска, ограждения.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} xsHidden smHidden>
                                <div className="footer-second-links-wrapper">
                                    <p><Link to="#">Вопрос-ответ</Link></p>
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
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);