import React, { Component, Fragment } from 'react';

import './CooperationPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import cooperationImage from './partnerka.jpg';

class CooperationPage extends Component {
    render() {
        return (
            <div id="CooperationPage" className="wrapper">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="cooperation-description">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Сотрудничество</h1>
                                            <p className="cooperation-description-paragraph-lead">
                                                Компания POLIVAN GROUP - один из быстро растущих лидеров на рынке
                                                террасной
                                                доски и изделий из ДПК в Владивостоке и на всем Дальнем востоке. Мы ищем
                                                сотрудничество с ведущими продавцами систем благоустройства загородного
                                                дома, Являясь инновационным производителем ДПК в России мы готовы
                                                гарантировать высокий уровень сервисного обслуживания нашим клиентам.
                                            </p>
                                            <p>
                                                Важным направлением развития для нашей компании стало установление
                                                надежных
                                                и долгосрочных отношений с дилерами нашей продукции в Москве, а также во
                                                всех регионах России, Беларуси и Казахстана. Нашим партнерам мы готовы
                                                предоставить наиболее выгодные условия поставок, оптовые цены и
                                                всестороннюю
                                                рекламно-информационную поддержку.
                                            </p>
                                            <p>
                                                Продукция поставляется дилерам в широком ассортименте с возможностью
                                                доставки до Склада силами транспортной компании или отдельными машинами
                                                по
                                                специальным ценам!
                                            </p>
                                            <p>
                                                Чтобы стать дилером компании POLIVAN GROUP и приобретать наши товары на
                                                дилерских условиях - вам достаточно связаться любым удобным вам
                                                способом. Мы
                                                с радостью обсудим взаимовыгодные формы сотрудничества. При
                                                положительном
                                                решении о сотрудничестве дилеру высылается Дилерский Договор с
                                                Приложениями.
                                            </p>
                                            <h3>
                                                Дилерство в компании POLIVAN GROUP - это выгодно!
                                            </h3>
                                            <hr/>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="cooperation-image">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <img src={cooperationImage} alt="cooperation-image"
                                                 className="img-responsive"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CooperationPage);
