import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import './ThermoBoardPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';

import BannerImage01 from './termodoska-01.jpg';

import SortImage01 from './termo-cv-01.png';
import SortImage02 from './termo-cv-02.png';
import SortImage03 from './termo-cv-03.png';

import ProductImage01 from './product-01.jpg';
import ProductImage02 from './product-02.jpg';
import ProductImage03 from './product-03.jpg';

import OperatorImage from './operator.png';

import ExampleImage01 from './primer-01.jpg';
import ExampleImage02 from './primer-02.jpg';
import ExampleImage03 from './primer-03.jpg';
import ExampleImage04 from './primer-04.jpg';
import ExampleImage05 from './primer-05.jpg';
import ExampleImage06 from './primer-06.jpg';
import ExampleImage07 from './primer-07.jpg';
import ExampleImage08 from './primer-08.jpg';
import ExampleImage09 from './primer-09.jpg';

import Certificates from '../IndexPage/Certificates/Certificates';

import Map from './map.png';

class TerraceBoardPage extends Component {
    render() {
        return (
            <div id="ThermoBoardPage">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="thermo-board-banner">
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Термо модифицированная древесина Deckline</h1>
                                            <div className="thermo-board-banner-image-wrapper">
                                                <img src={BannerImage01} alt="banner" className="img-responsive"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-sorts">
                                <Grid fluid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Доступные сорта</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4} mdHidden lgHidden>
                                            <div className="thermo-board-sorts-image-text-main">
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage01} alt="sort-01"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Сосна Экстра
                                                    </div>
                                                </div>
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage02} alt="sort-02"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Сосна Сорт А
                                                    </div>
                                                </div>
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage03} alt="sort-03"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Ясень
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="thermo-board-sorts-options">
                                                <h3>Вариант 1</h3>
                                                <table>
                                                    <tr>
                                                        <th>Ширина</th>
                                                        <th>Высота</th>
                                                        <th>Длина</th>
                                                    </tr>
                                                    <tr>
                                                        <td>130 мм</td>
                                                        <td>20 мм</td>
                                                        <td>2900 мм</td>
                                                    </tr>
                                                    <tr>
                                                        <td/>
                                                        <td/>
                                                        <td>2500 мм</td>
                                                    </tr>
                                                    <tr>
                                                        <td/>
                                                        <td/>
                                                        <td>2000 мм</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </Col>
                                        <Col md={4} xsHidden smHidden>
                                            <div className="thermo-board-sorts-image-text-main">
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage01} alt="sort-01"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Сосна Экстра
                                                    </div>
                                                </div>
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage02} alt="sort-02"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Сосна Сорт А
                                                    </div>
                                                </div>
                                                <div className="thermo-board-sorts-image-text-wrapper">
                                                    <div className="thermo-board-sorts-image">
                                                        <img src={SortImage03} alt="sort-03"
                                                             className="img-responsive"/>
                                                    </div>
                                                    <div className="thermo-board-sorts-text">
                                                        Ясень
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>
                                            <div className="thermo-board-sorts-options">
                                                <h3>Вариант 2</h3>
                                                <table>
                                                    <tr>
                                                        <th>Ширина</th>
                                                        <th>Высота</th>
                                                        <th>Длина</th>
                                                    </tr>
                                                    <tr>
                                                        <td>130 мм</td>
                                                        <td>30 мм</td>
                                                        <td>2900 мм</td>
                                                    </tr>
                                                    <tr>
                                                        <td/>
                                                        <td/>
                                                        <td>2500 мм</td>
                                                    </tr>
                                                    <tr>
                                                        <td/>
                                                        <td/>
                                                        <td>2000 мм</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="thermo-board-sorts-button-wrapper">
                                                <Button bsStyle="danger" href="thermo-price.pdf">Скачать
                                                    прайс-лист</Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-products">
                                <Grid>
                                    <Row>
                                        <h1>Комплектующие</h1>
                                        <Col sm={4}>
                                            <div className="thermo-board-products-image-text-wrapper">
                                                <div>
                                                    <Link href="#">
                                                        <img src={ProductImage01} alt="product-01"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="thermo-board-products-text">
                                                    <Link href="#">
                                                        Косой планкен (фасадная доска)
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="thermo-board-products-image-text-wrapper">
                                                <div>
                                                    <Link href="#">
                                                        <img src={ProductImage02} alt="product-02"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="thermo-board-products-text">
                                                    <Link href="#">
                                                        Террасная доска Ясень экстра
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="thermo-board-products-image-text-wrapper">
                                                <div>
                                                    <Link href="#">
                                                        <img src={ProductImage03} alt="product-03"
                                                             className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <div className="thermo-board-products-text">
                                                    <Link href="#">
                                                        Крепеж змейка (зазор 6 мм)
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-have-questions">
                                <Grid fluid>
                                    <Row>
                                        <Col md={6} lg={2}>
                                            <div className="thermo-board-have-questions-operator">
                                                <img src={OperatorImage} alt="operator" className="img-responsive"/>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={4}>
                                            <div className="thermo-board-have-questions-text-wrapper">
                                                <div className="thermo-board-have-questions-title">Остались вопросы?
                                                </div>
                                                <div className="thermo-board-have-questions-phone">8 902 56 777 89
                                                </div>
                                                <div className="thermo-board-have-questions-time">с 10 до 20 по
                                                    Владивостоку
                                                </div>
                                                <div className="thermo-board-have-questions-download"><i
                                                    className="fas fa-download"/>
                                                    <Link to="katalog.pdf" className="thermo-board-have-questions-link">
                                                        Скачать каталог продукции
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Clearfix visibleMdBlock/>
                                        <Col md={6} lg={3}>
                                            <div className="thermo-board-have-questions-buttons-wrapper">
                                                <div className="thermo-board-have-questions-button">
                                                    <i className="far fa-address-card"/>
                                                    <Link to="/contacts">Контакты</Link>
                                                </div>
                                                <div className="thermo-board-have-questions-button">
                                                    <i className="fas fa-briefcase"/>
                                                    <Link to="/cooperation">Оптовикам</Link>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={3}>
                                            <div className="thermo-board-have-questions-buttons-wrapper">
                                                <div className="thermo-board-have-questions-button">
                                                    <i className="fas fa-car"/>
                                                    <Link to="/delivery">Доставка по РФ</Link>
                                                </div>
                                                <div className="thermo-board-have-questions-button">
                                                    <i className="far far fa-folder"/>
                                                    <Link to="/instructions">Монтажные схемы</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-examples">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Примеры использования доски</h1>
                                            <div className="thermo-board-examples-wrapper">
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage01} alt="example-01"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage02} alt="example-02"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage03} alt="example-03"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage04} alt="example-04"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage05} alt="example-05"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage06} alt="example-06"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage07} alt="example-07"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage08} alt="example-08"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                                <div className="thermo-board-example-image-wrapper">
                                                    <img src={ExampleImage09} alt="example-09"
                                                         className="img-responsive"/>
                                                    <span className="thermo-board-example-zoom"><i
                                                        className="fas fa-search"/></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-description">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Термо доска DECKLINE</h1>
                                            <p>
                                                Термодревесина – материал, получаемый в процессе нагрева древесины до
                                                высоких температур, при которых происходит модификация внутренней
                                                структуры дерева на молекулярном уровне. Нагрев происходит в герметичной
                                                камере без доступа кислорода, благодаря чему дерево не загорается.
                                                Термообработанная древесина – уникальный материал, который позволяет
                                                добиться, казалось бы, невозможного. Сохранив все преимущества
                                                натурального дерева, он избавлен от многих присущих ему недостатков. Это
                                                позволяет добиваться отличных результатов, как в строительстве, так и в
                                                декорировании помещений.
                                            </p>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="thermo-board-certificates">
                                <Certificates/>
                            </div>
                            <hr/>
                            <div className="thermo-board-buy">
                                <Grid>
                                    <Row>
                                        <h1>Где <strong>купить?</strong></h1>
                                        <h3>Данную продукцию вы можете приобрести непосредственно в нашем офисе по
                                            адресу:</h3>
                                        <Col sm={3}>
                                            <div className="thermo-board-buy-image-text-main">
                                                <div className="thermo-board-buy-image-text-wrapper">
                                                    <Link to="/contacts">
                                                        <img src={Map} alt="map" className="img-responsive"/>
                                                    </Link>
                                                </div>
                                                <Link to="/contacts">Офис на карте</Link>
                                            </div>
                                        </Col>
                                        <Col sm={9}>
                                            <div className="thermo-board-buy-office">
                                                <div className="thermo-board-buy-office-icon-text-wrapper">
                                                    <div className="thermo-board-buy-office-icon">
                                                        <i className="fas fa-map-marker-alt"/>
                                                    </div>
                                                    <div className="thermo-board-buy-office-text">
                                                        <p>
                                                            <strong>Адрес: </strong>665458 г. Усолье-Сибирское, ул.
                                                            Шевченко 12
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="thermo-board-buy-office-icon-text-wrapper">
                                                    <div className="thermo-board-buy-office-icon">
                                                        <i className="fas fa-phone"/>
                                                    </div>
                                                    <div className="thermo-board-buy-office-text">
                                                        <p>
                                                            <strong>Телефон: </strong>8-902-5-677-789
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="thermo-board-buy-office-icon-text-wrapper">
                                                    <div className="thermo-board-buy-office-icon">
                                                        <i className="fas fa-phone"/>
                                                    </div>
                                                    <div className="thermo-board-buy-office-text">
                                                        <p>
                                                            <strong>Телефон: </strong>+7 (39543) 52-9-52
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="thermo-board-buy-office-icon-text-wrapper">
                                                    <div className="thermo-board-buy-office-icon">
                                                        <i className="fas fa-envelope"/>
                                                    </div>
                                                    <div className="thermo-board-buy-office-text">
                                                        <p>
                                                            <strong>Email: </strong><a
                                                            href="mailto:baikaltexcom@rambler.ru">baikaltexcom@rambler.ru</a>
                                                        </p>
                                                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TerraceBoardPage);
