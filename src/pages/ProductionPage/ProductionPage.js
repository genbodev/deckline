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
//import swal from 'sweetalert2'

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
                                                    ООО «СибЛесСтрой» это деревообрабатывающее предприятие, занимающееся
                                                    полным циклом обработки древесины. В процессе производства
                                                    образуется большое количество отходов деревообработки. Поэтому в
                                                    2014г. было принято решение организовать производство по выпуску
                                                    продукции из древесно-полимерного композита (WPC) под торговой
                                                    маркой DeckLine.
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
                                                            Дерево-пластик это суперсовременный материал из древесного
                                                            наполнителя и полимеров. Имеет все лучшие свойства дерева и
                                                            лишен его недостатков (гниение, плесень, горючесть, дефекты
                                                            поверхности, температурные колебания, и прочие).
                                                            древесно-полимерный композит по структуре состоит из 55%
                                                            древесных волокон, 35% полимерных составляющих, 10%
                                                            стабилизаторов и цветных пигментов высокой
                                                            светостойкости.<br/>
                                                            Предлагая на рынке продукцию марки DeckLine мы расширяем
                                                            производство и ассортимент выпускаемой продукции.<br/>
                                                            Современные технологии производства декинга, импортное
                                                            оборудование и экологически чистое сырье позволяют получать
                                                            уникальный продукт, сочетающий в себе, лучшие свойства
                                                            древесины и полимеров.<br/>
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
                                                            Продукция марки DeckLine, выпускаемая на нашем предприятии,
                                                            прошла испытания и разрешена к использованию, что
                                                            подтверждено сертификатами и заключениями.<br/>
                                                            Предприятие постоянно занимается совершенствованием
                                                            выпускаемой продукции, внедряя в производство новинки в
                                                            области добавок, наполнителей и пигментов значительно
                                                            улучшающие свойства материала.<br/>
                                                            Высокое качество продукции марки DeckLine в сочетании с
                                                            доступной ценой делают продукцию нашего предприятия
                                                            конкурентоспособной с отечественными и иностранными
                                                            производителями.
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
                                                            Древесно-полимерные композиционные материалы (ДПК),
                                                            предназначенные для переработки методом экструзии состоят из
                                                            трех основных компонентов:
                                                            <ul>
                                                                <li>частиц измельченной древесины</li>
                                                                <li>синтетических или органических термопластичных
                                                                    полимеров или их смеси,
                                                                </li>
                                                                <li>комплекса специальных химических добавок
                                                                    (модификаторов), улучшающих технологические и другие
                                                                    свойства композиции и получаемой продукции, часто
                                                                    называемых также аддитивами.
                                                                </li>
                                                            </ul>
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
                                                        className="production-advantage-image production-advantage-image-04"/>
                                                    <div className="production-advantage-text">
                                                        <p>
                                                            Материалы из древесно-полимерного композита завоевывают все
                                                            большую популярность у покупателей, при выборе оптимального
                                                            облицовочного материала, а террасная доска из декинга
                                                            заслуженно привлекает к себе при строительстве веранд,
                                                            пирсов и причалов. Неприхотливость, функциональность,
                                                            привлекательный внешний вид, разнообразная цветовая гамма и
                                                            приемлемые цены позволяют утверждать, что продукция из
                                                            Древесно-полимерного композита (ДПК) будет широко
                                                            востребована в строительстве загородных домов и
                                                            благоустройстве территорий.
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
                                                        <Link to="/fencing-system">
                                                            <img src={ProductImage02} className="img-responsive"
                                                                 alt="product-02"/>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <p><Link to="/fencing-system">Система ограждений</Link></p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={12}>
                                                <p>
                                                    Это экологически чистая доска, которая сочетает в себе основные
                                                    достоинства натуральной древесины (70%) и пластика (30%), и обладает
                                                    лучшими физическими характеристиками, чем каждый из этих материалов
                                                    в отдельности.
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
                                                        <p>
                                                            <strong>Преимущества продукции марки DeckLine:</strong>
                                                            <ul>
                                                                <li>Обладает стабильной геометрией</li>
                                                                <li>Устойчив к ударам и механическому воздействию</li>
                                                                <li>Не образует сучков и заноз</li>
                                                                <li>Имеет равномерный цвет по толщине и обладает устойчивостью к выгоранию</li>
                                                                <li>Устойчив к УФ - излучению;</li>
                                                                <li>Устойчив ко всем погодным условиям (выдерживает температуру от -50 до + 90С), влагоустойчив</li>
                                                                <li>Устойчив к поражению бактериями, грибками, насекомыми и т. д.</li>
                                                                <li>Легко монтируется и демонтируется</li>
                                                                <li>Многократно дешевле твердых тропических пород дерева;</li>
                                                                <li>Тепло натурального дерева, приятные тактильные ощущения и внешний вид.</li>
                                                                <li>Благодаря специальной структуре , поверхность не скользит даже в дождь;</li>
                                                                <li>Чиститься обычной щеткой, легко моется неагрессивными моющими средствами и не требует  особого ухода;</li>
                                                                <li>Обрабатывается теми же инструментами, что и древесина. Легко  пилится, строгается, сверлиться, шлифуется, отлично удерживает гвозди, скобы, шурупы.</li>
                                                                <li>В отличии от древесных материалов, расходы на ремонт покраску, специальные жидкости во время эксплуатации доски равны нулю.</li>
                                                                <li>Является высоко экологичным материалом, что очень важно в наше время.</li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                    <div className="production-logistic-image">
                                                        <img src={LogisticImage} alt="logistic"
                                                             className="img-responsive"/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        {/*<Row>
                                            <Col xs={12}>
                                                <p>
                                                    Наши дилеры работают во многих городах России и стран СНГ.
                                                    Превосходное
                                                    качество, долговечность, простота монтажа и эксплуатации,
                                                    экологическая
                                                    чистота нашей продукции уже по достоинству оценены
                                                    соотечественниками, а
                                                    также жителями Казахстана, Украины и Белоруссии и, что не маловажно,
                                                    другими производителями дпк в России.
                                                </p>
                                            </Col>
                                        </Row>*/}
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
