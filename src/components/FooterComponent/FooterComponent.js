import React, { Component } from 'react';

import './FooterComponent.css';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class FooterComponent extends Component {
    render() {
        return (
            <div id="FooterComponent">
                <div className="footer-first-wrapper">
                    <Grid>
                        <Row>
                            <Col xs={4}>
                                <h4>Контакты</h4>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Адрес: </strong>г. Владивосток, ул. Русская, д. 19 В, офис 802 (ТЦ
                                            "Европейский Пассаж")
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong><span className="footer-first-text-phone">8 800 1000 575</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong>+7 (423) 23-69-400
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>E-mail: </strong><a href="mailto:info@polivan.com">info@polivan.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Рабочее время: </strong>Пн - Пт / 09:00 - 18:00 по Владивостоку (+7ч к Москве)
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <h4>Дополнительно</h4>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать каталог продукции</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать каталог продукции</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать каталог продукции</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать каталог продукции</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать каталог продукции</a>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={4}>
                                Instagram Widget
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="footer-second-wrapper">
                    <Grid>
                        <Row>
                            <Col xs={6}>
                                <div className="footer-second-logo-info-wrapper">
                                    <div className="footer-second-logo">ЛОГО</div>
                                    <div className="footer-second-info">ИНФО</div>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="footer-second-links-wrapper">
                                    <p>Вопрос-ответ</p>
                                    <p>Карта сайта</p>
                                    <p>Контакты</p>
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