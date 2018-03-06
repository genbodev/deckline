import React, { Component } from 'react';

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
                                            <strong>Адрес: </strong>665458 г. Усолье-Сибирское, ул. Шевченко 12
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong><span className="footer-first-text-phone">8-902-5-677-789</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>Телефон: </strong>+7 (39543) 52-9-52
                                        </p>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <p>
                                            <strong>E-mail: </strong><a href="mailto:baikaltexcom@rambler.ru">baikaltexcom@rambler.ru</a>
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
                            <Col md={6} lg={5}>
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
                                        <a href="#">Скачать альбом технических решений</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать экспертное заключение по испытаниям</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать инструкцию по монтажу террасной доски</a>
                                    </div>
                                </div>
                                <div className="footer-first-icon-text-wrapper">
                                    <div className="footer-first-icon">
                                        <i className="fas fa-download"></i>
                                    </div>
                                    <div className="footer-first-text">
                                        <a href="#">Скачать инструкцию по монтажу ограждений</a>
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
                                        onLoading={() => {}}
                                        onSuccess={() => {}}
                                        onAfterRender={() => {}}
                                        onFailure={() => {}}
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
                                        <p>ООО "СибЛесСтрой" / ИНН: 3819018599</p>
                                        <p>ОГРН: 1073819000420</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} xsHidden smHidden>
                                <div className="footer-second-links-wrapper">
                                    <p><a href="#">Вопрос-ответ</a></p>
                                    <p><a href="#">Карта сайта</a></p>
                                    <p><a href="#">Контакты</a></p>
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