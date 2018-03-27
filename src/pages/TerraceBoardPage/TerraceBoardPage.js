import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import './TerraceBoardPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

import PageCarousel from './PageCarousel/PageCarousel';

import SandColorImage from './sand.png';
import LightBrownColorImage from './light-brown.png';
import DarkBrownColorImage from './dark-brown.png';
import BlackColorImage from './black.png';

import ProductImage01 from './product01.jpg';
import ProductImage02 from './product02.jpg';
import ProductImage03 from './product03.jpg';
import ProductImage04 from './product04.jpg';
import ProductImage05 from './product05.jpg';
import ProductImage06 from './product06.jpg';
import ProductImage07 from './product07.jpg';
import ProductImage08 from './product08.jpg';

import OperatorImage from './operator.png';

import ExampleImage01 from './terrasnaya-doska-01.jpg';
import ExampleImage02 from './terrasnaya-doska-02.jpg';
import ExampleImage03 from './terrasnaya-doska-03.jpg';
import ExampleImage04 from './terrasnaya-doska-04.jpg';
import ExampleImage05 from './terrasnaya-doska-05.jpg';
import ExampleImage06 from './terrasnaya-doska-06.jpg';
import ExampleImage07 from './terrasnaya-doska-07.jpg';
import ExampleImage08 from './terrasnaya-doska-08.jpg';

import ApplyingBenchImage from './001-bench.png';
import ApplyingPoolImage from './002-pool.png';
import ApplyingFacadeImage from './003-facade.png';
import ApplyingCafeImage from './004-outdoor-cafe.png';
import ApplyingPierImage from './005-pier.png';
import ApplyingHouseImage from './006-house.png';

import Certificates from '../IndexPage/Certificates/Certificates';

class TerraceBoardPage extends Component {
    render() {
        return (
            <div id="TerraceBoardPage">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="terrace-board-carousel">
                                <Grid fluid>
                                    <PageCarousel/>
                                </Grid>
                            </div>
                            <div className="terrace-board-colors">
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Цвета</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={0} md={2} lg={4}>
                                        </Col>
                                        <Col xs={6} md={2} lg={1}>
                                            <div
                                                className="terrace-board-colors-main-wrapper terrace-board-colors-main-wrapper-left">
                                                <div className="terrace-board-colors-image-text-wrapper">
                                                    <img src={SandColorImage} alt="sand-color"
                                                         className="img-responsive"/>
                                                    <div className="terrace-board-colors-text">Песочный</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={6} md={2} lg={1}>
                                            <div
                                                className="terrace-board-colors-main-wrapper terrace-board-colors-main-wrapper-right">
                                                <div className="terrace-board-colors-image-text-wrapper">
                                                    <img src={LightBrownColorImage} alt="light-brown-color"
                                                         className="img-responsive"/>
                                                    <div className="terrace-board-colors-text">Светло-коричневый</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Clearfix visibleXsBlock/>
                                        <Col xs={6} md={2} lg={1}>
                                            <div
                                                className="terrace-board-colors-main-wrapper terrace-board-colors-main-wrapper-left">
                                                <div className="terrace-board-colors-image-text-wrapper">
                                                    <img src={DarkBrownColorImage} alt="dark-brown"
                                                         className="img-responsive"/>
                                                    <div className="terrace-board-colors-text">Темно-коричневый</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={6} md={2} lg={1}>
                                            <div
                                                className="terrace-board-colors-main-wrapper terrace-board-colors-main-wrapper-right">
                                                <div className="terrace-board-colors-image-text-wrapper">
                                                    <img src={BlackColorImage} alt="black-color"
                                                         className="img-responsive"/>
                                                    <div className="terrace-board-colors-text">Черный</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={0} md={2} lg={4}>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col sm={4}>
                                            <div className="terrace-board-colors-parameters-wrapper">
                                                <div className="terrace-board-colors-parameters-key">Высота</div>
                                                <div className="terrace-board-colors-parameters-value">23 мм</div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div>
                                                <div className="terrace-board-colors-parameters-wrapper">
                                                    <div className="terrace-board-colors-parameters-key">Ширина</div>
                                                    <div className="terrace-board-colors-parameters-value">140 мм</div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div>
                                                <div className="terrace-board-colors-parameters-wrapper">
                                                    <div className="terrace-board-colors-parameters-key">Длина</div>
                                                    <div className="terrace-board-colors-parameters-value">3000 мм</div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="terrace-board-products">
                                <Grid>
                                    <Row>
                                        <h1>Комплектующие</h1>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage01} alt="product-01"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Уголок завершающий (4 цвета) 43х43х3000мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage02} alt="product-02"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Заглушка торцевая (4 цвета) 17х23х140 мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage03} alt="product-03"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Универсальная доска (4 цвета) 10х140х3000 мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage04} alt="product-04"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Кляймер металлический (зазор 5мм) 9х27х40мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage05} alt="product-05"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Кляймер стартовый металлический 9х15х28мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage06} alt="product-06"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Кляймер пластиковый (зазор 5мм) 9х17х40мм
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage07} alt="product-07"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Лага ДПК 30х40х3000 мм.
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="terrace-board-products-image-text-wrapper">
                                                <div>
                                                    <Link to="#">
                                                        <img src={ProductImage08} alt="product-08"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-products-text">
                                                    <Link to="#">
                                                        Лага алюминивая 28х37х3000 мм.
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="terrace-board-have-questions">
                                <Grid fluid>
                                    <Row>
                                        <Col md={6} lg={2}>
                                            <div className="terrace-board-have-questions-operator">
                                                <img src={OperatorImage} alt="operator" className="img-responsive"/>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <div className="terrace-board-have-questions-text-wrapper">
                                                <div className="terrace-board-have-questions-title">Остались вопросы?
                                                </div>
                                                <div className="terrace-board-have-questions-phone"> (39543) 52953, 52952
                                                </div>
                                                <div className="terrace-board-have-questions-time">с 9:00 до 18:00
                                                </div>
                                                <div className="terrace-board-have-questions-download"><i
                                                    className="fas fa-download"/>
                                                    <a href="katalog.pdf" className="terrace-board-have-questions-link">
                                                        Скачать каталог продукции
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Clearfix visibleMdBlock/>
                                        <Col md={6} lg={3}>
                                            <div className="terrace-board-have-questions-buttons-wrapper">
                                                <div className="terrace-board-have-questions-button">
                                                    <i className="far fa-address-card"/>
                                                    <Link to="/contacts">Контакты</Link>
                                                </div>
                                                <div className="terrace-board-have-questions-button">
                                                    <i className="fas fa-briefcase"/>
                                                    <Link to="/cooperation">Оптовикам</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={3}>
                                            <div className="terrace-board-have-questions-buttons-wrapper">
                                                <div className="terrace-board-have-questions-button">
                                                    <i className="fas fa-car"/>
                                                    <Link to="/delivery">Доставка по РФ</Link>
                                                </div>
                                                <div className="terrace-board-have-questions-button">
                                                    <i className="far far fa-folder"/>
                                                    <Link to="/instructions">Монтажные схемы</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="terrace-board-examples">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Примеры использования террасной доски</h1>
                                            <div className="terrace-board-examples-wrapper">
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage01} alt="example-01"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage02} alt="example-02"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage03} alt="example-03"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage04} alt="example-04"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage05} alt="example-05"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage06} alt="example-06"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage07} alt="example-07"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="terrace-board-example-image-wrapper">
                                                    <img src={ExampleImage08} alt="example-08"
                                                         className="img-responsive"/>
                                                    <span className="terrace-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="terrace-board-description">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Террасная доска из ДПК DECKLINE</h1>
                                            <p>
                                                Это новый, качественный и современный настил из древесно-полимерного
                                                композита. Профиль имеет четыре рабочие поверхности - мелкий вельвет,
                                                широкая полоска, текстура дерева и глубокая текстура дерева. Цвет
                                                песочный, светло-коричневый, темно-коричневый и черный. Террасная доска
                                                DECKLINE (Россия) производится с учетом всех эксплуатационных нагрузок -
                                                сфера применения от небольших частных террас до мест общественного
                                                пользования. Материал не прихотлив и не требует дополнительной
                                                обработки. Большая номенклатура комплектующих элементов позволяет
                                                реализовать самые сложные проекты террас и настилов.
                                            </p>
                                            <p>
                                                Изготавливается террасная доска в следующих пропорциях: на 58% из
                                                древесной муки, на 35% из полиэтилена и на 7% из добавок. Использование
                                                в производстве полиэтилен обеспечило террасной доске DECKLINE высокую
                                                износостойкость и устойчивость к ультрафиолетовым лучам и резким
                                                перепадам температуры, что отличает ее от других аналогов, например, на
                                                поливинилхлоридной основе. Наличие в составе доски настоящей древесины
                                                дает поверхности антискользящий эффект и придает характерный запах с
                                                приятной текстурой.
                                            </p>
                                            <h1>Применение</h1>
                                            <div className="terrace-board-description-applying">
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingBenchImage} alt="applying-bench"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingPoolImage} alt="applying-pool"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingFacadeImage} alt="applying-facade"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingCafeImage} alt="applying-cafe"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingPierImage} alt="applying-pier"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="terrace-board-description-applying-image">
                                                    <Link to="#">
                                                        <img src={ApplyingHouseImage} alt="applying-house"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="terrace-board-certificates">
                                <Certificates/>
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
    }

}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(TerraceBoardPage);
