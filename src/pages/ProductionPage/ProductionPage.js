import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import './ProductionPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';

import ProductImage01 from './product-01.jpg';
import ProductImage02 from './product-02.jpg';
import LogisticImage from './konteyner-500.jpg';

class ProductionPage extends Component {
    render() {
        return (
            <div id="ProductionPage">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="production-description">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1 className="text-center">Производство Deckline</h1>
                                            <p>
                                                Ведущий российский производитель изделий из древесно-полимерного
                                                композита (ДПК): современного строительного и отделочного материла,
                                                объединяющего лучшие свойства дерева и пластика. Основанная в 2015 году,
                                                DECKLINE на сегодняшний день мы предлагаем широкий спектр наиболее
                                                востребованных материалов из ДПК.
                                            </p>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="production-advantages">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="production-advantage-image-text-wrapper">
                                                <div
                                                    className="production-advantage-image production-advantage-image-01"/>
                                                <div className="production-advantage-text">
                                                    <p>
                                                        Завод DECKLINE оснащен самым современным оборудованием
                                                        европейских
                                                        машиностроительных компаний и является крупнейшим в России по
                                                        производству
                                                        древесно-полимерного композита. Выпуская на сегодняшний день 14
                                                        различных типов
                                                        изделий, компания постоянно работает над увеличением
                                                        ассортимента.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div
                                                className="production-advantage-image-text-wrapper
                                                           production-advantage-image-text-wrapper-reverse">
                                                <div
                                                    className="production-advantage-image production-advantage-image-02"/>
                                                <div className="production-advantage-text">
                                                    <p>
                                                        Для этого одновременно с инвестициями в производство ДПК
                                                        существенные средства вкладываются и в проведение научных
                                                        исследований. В результате создаются уникальные рецептуры для
                                                        сырья, разрабатываются решения, которые будут востребованы в
                                                        будущем. Благодаря такому комплексному подходу достигается
                                                        непревзойденное качество изделий из ДПК при обеспечении лучших
                                                        конкурентоспособных цен.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div
                                                className="production-advantage-image-text-wrapper">
                                                <div
                                                    className="production-advantage-image production-advantage-image-03"/>
                                                <div className="production-advantage-text">
                                                    <p>
                                                        Наша продукция, являясь непревзойденной по ряду технических
                                                        характеристик, соответствует самым строгим международным
                                                        стандартам качества IEC и европейским нормативам СЕ. Имеются все
                                                        российские сертификаты соответствия, пожарной безопасности и
                                                        санитарно-эпидемиологические заключения. Все выпускаемые партии
                                                        изделий проходят обязательный контроль качества в специальной
                                                        лаборатории.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="production-products">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h3 className="header-accent">Мы производим из ДПК</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <div className="production-products-image-text-wrapper">
                                                <div>
                                                    <img src={ProductImage01} className="img-responsive"
                                                         alt="product-01"/>
                                                </div>
                                                <div>
                                                    <p><Link to="/terrace-board">Террасная доска из ДПК</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="production-products-image-text-wrapper">
                                                <div>
                                                    <img src={ProductImage02} className="img-responsive"
                                                         alt="product-02"/>
                                                </div>
                                                <div>
                                                    <p><Link href="#">Универсальная доска</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <p>
                                                Универсальная доска являющиеся во многих случаях наиболее оптимальным
                                                материалом для внешних и внутренних отделочных работ. Причем уникальные
                                                свойства изделий делают их одинаково востребованными как при отделке
                                                коттеджей, загородных домов и таунхаусов, так и для отделки промышленных
                                                и офисных помещений.
                                            </p>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="production-logistic">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="production-logistic-text-image-wrapper">
                                                <div className="production-logistic-text">
                                                    <p>Удачное расположение завода и выстроенная система логистики
                                                        гарантирует своевременную доставку товаров в нужном заказчику
                                                        объеме. Кроме того, компания уделяет серьезное внимание
                                                        обслуживанию
                                                        клиентов, предоставляя консультации по монтажу и дальнейшей
                                                        эксплуатации материалов из ДПК, а также оперативно реагируя на
                                                        замечания контрагентов к своей деятельности. Политика POLIVAN -
                                                        добиваться полного потребительского удовлетворения
                                                        предоставляемой
                                                        продукцией и сервисом (наше основное отличие от других
                                                        производителей ДПК).</p>
                                                </div>
                                                <div className="production-logistic-image">
                                                    <img src={LogisticImage} alt="logistic"
                                                         className="img-responsive"/>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <p>
                                                Наши дилеры работают во многих городах России и стран СНГ. Превосходное
                                                качество, долговечность, простота монтажа и эксплуатации, экологическая
                                                чистота нашей продукции уже по достоинству оценены соотечественниками, а
                                                также жителями Казахстана, Украины и Белоруссии и, что не маловажно,
                                                другими производителями дпк в России.
                                            </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductionPage);
