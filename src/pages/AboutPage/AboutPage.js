import React, { Component, Fragment } from 'react';

import './AboutPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Button } from 'react-bootstrap';

//import deliveryImage from './dostavka.jpg';

class AboutPage extends Component {
    render() {
        return (
            <div id="AboutPage" className="wrapper">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="about-advantages">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Компания DECKLINE это качество, инновации и успех</h1>
                                            <p className="about-advantages-lead">
                                                В настоящее время DECKLINE – успешная компания. Этот успех мы
                                                заслужили своим трудом, ответственностью, инновационным подходом. Мы
                                                продолжаем свое развитие и готовы к новым достижениям..
                                            </p>
                                            <Button bsStyle="success">Присоединяйся к нам!</Button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <hr/>
                            <div className="about-description">
                                <Grid>
                                    <Row>
                                        <Col sm={8}>
                                            <h3 className="header-accent">Кто <strong>мы</strong></h3>
                                            <p>
                                                Неоднократно испытав на себе все муки ремонта, который из-за
                                                недолговечности строительных материалов повторялся вновь и вновь,
                                                возникла идея о поиске инновационного материала, способного облегчить
                                                ремонт и строительство для наших будущих клиентов. Это должен был быть
                                                не просто современный красивый материал, но качественный и долговечный.
                                                Именно поэтому наше внимание привлек такой материал как <a
                                                href="#">ДПК</a> (древесно-полимерный композит). Изучив все свойства и
                                                характеристики
                                                данного материала, было принято решение о запуске собственного
                                                производства. В то время в России о таком материале знали лишь единицы,
                                                хотя за рубежом уже активно заменяли традиционные материалы изделиями из
                                                древесно-полимерного композита.
                                            </p>
                                            <p>
                                                Для поддержания лидирующих позиции мы постоянно модернизируем наше
                                                производство, следим за качеством продукции и повышаем его, расширяем
                                                ассортимент товаров и улучшаем качество сервиса для наших клиентов. К
                                                примеру, в 2014 году была увеличена производственная мощность каждого
                                                станка за счет улучшенной системы охлаждения, а в 2016 году мы начали
                                                разработку состава ДПК с пониженной степенью горючести. Для удобства
                                                ввели единый центр обработки звонков и номер <strong>8-800</strong> для
                                                бесплатных
                                                звонков со всей России. Для более качественной работы за каждым
                                                клиентом, партнером теперь закрепляется менеджер.
                                            </p>
                                        </Col>
                                        <Col sm={4}>

                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="about-history">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h3 className="header-accent">Наша <strong>история</strong></h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-image">
                                                    image
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date">2016</div>
                                                    <div className="about-history-text">В начале 2016 года POLIVAN GROUP запускает вторую линию, на этот раз по производству СИСТЕМ ОГРАЖДЕНИЯ.</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
