import React, { Component, Fragment } from 'react';

import './ContactsPage.css';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup/FieldGroup'
import {
    ReCaptcha,
    SITE_KEY,
    verifyCallback,
    callback,
    expiredCallback/*, resetReCaptcha, reCaptchaInstance*/
} from './ReCaptcha/ReCaptcha'
/*import GoogleMapComponent from '../../components/GoogleMapComponent/GoogleMapComponent';*/
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{lat: 52.763107, lng: 103.637306}}
    >
        {props.isMarkerShown && <Marker position={{lat: 52.763107, lng: 103.637306}}/>}
    </GoogleMap>
));

function drawSticky(stickyComponent) {
    return (
        <Sticky>
            {
                ({
                     style,

                     // the following are also available but unused in this example
                     isSticky,
                     wasSticky,
                     distanceFromTop,
                     distanceFromBottom,
                     calculatedHeight
                 }) => {
                    return (
                        <div style={style} className={isSticky ? 'sticky' : 'sticky-default'}>
                            {stickyComponent}
                        </div>
                    )
                }
            }
        </Sticky>);
}


class ContactsPage extends Component {
    render() {
        return (
            <div id="ContactsPage">
                <TopPanelComponent/>
                <StickyContainer>
                    {drawSticky(<MainNavigation/>)}
                    <MobileNavigation/>
                    <Fragment>
                        <div className="contacts-map">
                            <Grid fluid className="contacts-map-container">
                                <Row>
                                    <Col xs={12}>
                                        <MyMapComponent
                                            isMarkerShown
                                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHHQXm7Ow8z88XbirQ6glbg3dsLIiYDfw&v=3.exp&libraries=geometry,drawing,places"
                                            loadingElement={<div style={{height: `100%`}}/>}
                                            containerElement={<div style={{height: `400px`}}/>}
                                            mapElement={<div style={{height: `100%`}}/>}
                                        />
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                        <div className="contacts-form-info">
                            <Grid>
                                <Row>
                                    <Col lg={6}>
                                        <div className="contacts-form-wrapper">
                                            <h1>Обратная <strong>Связь</strong></h1>
                                            <form id="contact-form">
                                                <FieldGroup
                                                    id="name"
                                                    type="text"
                                                    label="Как Вас зовут?"
                                                    placeholder="Иван Петрович"
                                                    inputGroupIcon="<i class='far fa-comment'></i>"
                                                />
                                                <FieldGroup
                                                    id="email"
                                                    type="email"
                                                    label="Email"
                                                    placeholder="my@email.com"
                                                    inputGroupIcon="<i class='fas fa-at'></i>"
                                                />
                                                <FieldGroup
                                                    id="phone"
                                                    type="text"
                                                    label="Контактный телефон"
                                                    placeholder="1234567890"
                                                    inputGroupIcon="<i class='fas fa-phone'></i>"
                                                />
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>Сообщение</ControlLabel>
                                                    <FormControl
                                                        controlId="comment"
                                                        componentClass="textarea"
                                                        placeholder="Как стать Вашим партнером?"
                                                        rows="10"
                                                    />
                                                </FormGroup>
                                                <ReCaptcha
                                                    /*ref={e => reCaptchaInstance = e}*/
                                                    sitekey={SITE_KEY}
                                                    size="compact"
                                                    render="explicit"
                                                    verifyCallback={verifyCallback}
                                                    onloadCallback={callback}
                                                    expiredCallback={expiredCallback}
                                                />
                                                <br/>
                                                <button
                                                    /*onClick={resetReCaptcha}*/
                                                >
                                                    Reset
                                                </button>
                                                <Button bsStyle="success" type="submit">Отправить</Button>
                                            </form>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="contacts-info-wrapper">
                                            <div>
                                                <p>
                                                    В настоящее время POLIVAN GROUP – успешная компания. Этот успех мы
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
                                                        <i className="fas fa-map-marker-alt"></i>
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
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <div className="contacts-info-office-text">
                                                        <p>
                                                            <strong>Телефон: </strong>8-902-5-677-789
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="contacts-info-office-icon-text-wrapper">
                                                    <div className="contacts-info-office-icon">
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <div className="contacts-info-office-text">
                                                        <p>
                                                            <strong>Телефон: </strong>+7 (39543) 52-9-52
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="contacts-info-office-icon-text-wrapper">
                                                    <div className="contacts-info-office-icon">
                                                        <i className="fas fa-envelope"></i>
                                                    </div>
                                                    <div className="contacts-info-office-text">
                                                        <p>
                                                            <strong>Телефон: </strong><a
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
                                                        <i className="fas fa-clock"></i>
                                                    </div>
                                                    <div className="contacts-info-time-text">
                                                        <p>
                                                            Понедельник - Пятница - 09:00 до 18:00
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="contacts-info-time-icon-text-wrapper">
                                                    <div className="contacts-info-time-icon">
                                                        <i className="fas fa-clock"></i>
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
                                                <p><strong>Адрес: </strong>665458 г. Усолье-Сибирское, ул. Шевченко 12
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
                    </Fragment>
                </StickyContainer>
                <Footer/>
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
