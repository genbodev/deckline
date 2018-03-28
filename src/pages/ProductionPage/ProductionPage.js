import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

import './ProductionPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky, getPageDataBySlug } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

import ProductImage01 from './product-01.jpg';
import ProductImage02 from './product-02.jpg';
import LogisticImage from './konteyner-500.jpg';

import config from "../../config";

const {production} = config.SLUGS;
const {DEFAULT_TITLE} = config;

class ProductionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: production
        };
    }
    render() {
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;

        if (isSettingsReady && isAdminReady && isPagesReady) {
            const {slug} = this.state;
            const {data} = this.props.pages;
            const currentPage = getPageDataBySlug(data, slug);
            const title = currentPage.title.rendered.length > 1 ? `${DEFAULT_TITLE} - ${currentPage.title.rendered}` : DEFAULT_TITLE;
            const description = currentPage.acf.meta_description;
            const keywords = currentPage.acf.meta_key_words;

            return (
                <div id="ProductionPage">
                    <Helmet>
                        <title>{title}</title>
                        <meta name="keywords" content={keywords}/>
                        <meta name="description" content={description}/>
                    </Helmet>
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
                                                        <Link to="/terrace-board">
                                                            <img src={ProductImage01} className="img-responsive"
                                                                 alt="product-01"/>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <p><Link to="/terrace-board">Террасная доска из ДПК</Link></p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="production-products-image-text-wrapper">
                                                    <div>
                                                        <Link to="/terrace-board">
                                                            <img src={ProductImage02} className="img-responsive"
                                                                 alt="product-02"/>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <p><Link to="/terrace-board">Универсальная доска</Link></p>
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
                                                            замечания контрагентов к своей деятельности. Политика DECKLINE -
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
                                <ScrollTop/>
                            </Fragment>
                        </StickyContainer>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="Loader">
                    <Loader type="Circles" color="#6c912b" height={80} width={80}/>
                </div>
            );
        }
    }

}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        pages: state.pages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductionPage);
