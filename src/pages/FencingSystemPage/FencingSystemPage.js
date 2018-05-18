import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import Lightbox from 'react-image-lightbox';

import './FencingSystemPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky, getPageDataBySlug } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import swal from "sweetalert2";

import PageCarousel from './PageCarousel/PageCarousel';

import SandColorImage from './sand.png';
import LightBrownColorImage from './light-brown.png';
import DarkBrownColorImage from './dark-brown.png';
import BlackColorImage from './black.png';

import OperatorImage from './operator.png';

import ExampleImage01 from './fencing-01.jpg';
import ExampleImage02 from './fencing-02.jpg';
import ExampleImage03 from './fencing-03.jpg';
import ExampleImage04 from './fencing-04.jpg';
import ExampleImage05 from './fencing-05.jpg';
import ExampleImage06 from './fencing-06.jpg';
import ExampleImage07 from './fencing-07.jpg';

import Certificates from '../IndexPage/Certificates/Certificates';

import config from "../../config";

const {fencingSystem} = config.SLUGS;
const {DEFAULT_TITLE} = config;

const images = [
    ExampleImage01,
    ExampleImage02,
    ExampleImage03,
    ExampleImage04,
    ExampleImage05,
    ExampleImage06,
    ExampleImage07
];

class FencingSystemPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: fencingSystem,
            photoIndex: 0,
            isOpen: false
        };
    }
    handleClick = (e) => this.showMsg(e);

    showMsg(e) {
        swal('Доставка по РФ и странам СНГ осуществляется любой транспортной компанией исходя из предпочтений заказчика. Мы ценим плоды своего труда, поэтому перед отправкой все изделия тщательно упаковываются для обеспечения сохранности при транспортировке')
    }

    openPicture(key = 0) {
        this.setState({photoIndex: key, isOpen: true});
    }

    render() {
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;
        const {photoIndex, isOpen} = this.state;
        const {posts} = this.props;
        if (isSettingsReady && isAdminReady && isPagesReady && posts && posts.isPostsReady) {
            const {slug} = this.state;
            const {data} = this.props.pages;
            const currentPage = getPageDataBySlug(data, slug);
            const title = currentPage.title.rendered.length > 1 ? `${DEFAULT_TITLE} - ${currentPage.title.rendered}` : DEFAULT_TITLE;
            const description = currentPage.acf.meta_description;
            const keywords = currentPage.acf.meta_key_words;
            const {fencing} = this.props.posts;
            return (
                <div id="FencingSystemPage">
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
                                <div className="fencing-system-carousel">
                                    <Grid fluid>
                                        <PageCarousel/>
                                    </Grid>
                                </div>
                                <div className="fencing-system-colors">
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
                                                    className="fencing-system-colors-main-wrapper fencing-system-colors-main-wrapper-left">
                                                    <div className="fencing-system-colors-image-text-wrapper">
                                                        <img src={SandColorImage} alt="sand-color"
                                                             className="img-responsive"/>
                                                        <div className="fencing-system-colors-text">Бук</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6} md={2} lg={1}>
                                                <div
                                                    className="fencing-system-colors-main-wrapper fencing-system-colors-main-wrapper-right">
                                                    <div className="fencing-system-colors-image-text-wrapper">
                                                        <img src={LightBrownColorImage} alt="light-brown-color"
                                                             className="img-responsive"/>
                                                        <div className="fencing-system-colors-text">Венге светлый</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Clearfix visibleXsBlock/>
                                            <Col xs={6} md={2} lg={1}>
                                                <div
                                                    className="fencing-system-colors-main-wrapper fencing-system-colors-main-wrapper-left">
                                                    <div className="fencing-system-colors-image-text-wrapper">
                                                        <img src={DarkBrownColorImage} alt="dark-brown"
                                                             className="img-responsive"/>
                                                        <div className="fencing-system-colors-text">Венге темный</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6} md={2} lg={1}>
                                                <div
                                                    className="fencing-system-colors-main-wrapper fencing-system-colors-main-wrapper-right">
                                                    <div className="fencing-system-colors-image-text-wrapper">
                                                        <img src={BlackColorImage} alt="black-color"
                                                             className="img-responsive"/>
                                                        <div className="fencing-system-colors-text">Черный</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={0} md={2} lg={4}>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <div className="fencing-system-products">
                                    <Grid>
                                        <h1>Комплектующие</h1>
                                        <div className="fencing-system-accessories-wrapper">
                                            {(fencing && fencing.length) ? fencing.map((tagItem, key) => {
                                                if (tagItem['better_featured_image']) {
                                                    return (<div key={key} className="fencing-system-products-image-text-wrapper">
                                                        <div className="fencing-system-products-image-wrapper">
                                                            <Link activeClassName="active"
                                                                  to={`/catalog?id=${tagItem.id}`} target="_blank">
                                                                <img
                                                                    src={`${tagItem['better_featured_image']['source_url']}`}
                                                                    alt={`product-${key}`}
                                                                    className=""/>
                                                            </Link>
                                                        </div>
                                                        <div className="fencing-system-products-text">
                                                            <Link activeClassName="active"
                                                                  to={`/catalog?id=${tagItem.id}`} target="_blank">
                                                                {tagItem.title.rendered}
                                                            </Link>
                                                        </div>
                                                    </div>)
                                                } else {
                                                    return null;
                                                }
                                            }): null}
                                        </div>
                                    </Grid>
                                </div>
                                <div className="fencing-system-have-questions">
                                    <Grid fluid>
                                        <Row>
                                            <Col md={6} lg={2}>
                                                <div className="fencing-system-have-questions-operator">
                                                    <img src={OperatorImage} alt="operator" className="img-responsive"/>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={4}>
                                                <div className="fencing-system-have-questions-text-wrapper">
                                                    <div className="fencing-system-have-questions-title">Остались вопросы?
                                                    </div>
                                                    <div className="fencing-system-have-questions-phone"> (39543) 52953,
                                                        52952
                                                    </div>
                                                    <div className="fencing-system-have-questions-time">с 9:00 до 18:00
                                                    </div>
                                                    <div className="fencing-system-have-questions-download"><i
                                                        className="fas fa-download"/>
                                                        <a href="/files/ogr-price.xls"
                                                           className="fencing-system-have-questions-link" download>
                                                            Скачать каталог продукции
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Clearfix visibleMdBlock/>
                                            <Col md={6} lg={3}>
                                                <div className="fencing-system-have-questions-buttons-wrapper">
                                                    <div className="fencing-system-have-questions-button">
                                                        <i className="far fa-address-card"/>
                                                        <Link to="/contacts">Контакты</Link>
                                                    </div>
                                                    <div className="fencing-system-have-questions-button">
                                                        <i className="fas fa-briefcase"/>
                                                        <a href="/files/prices.zip"
                                                           className="fencing-system-have-questions-link" download>
                                                            Оптовикам
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="fencing-system-have-questions-buttons-wrapper">
                                                    <div className="fencing-system-have-questions-button">
                                                        <i className="fas fa-car"/>
                                                        <div className="fencing-system-have-questions-link"
                                                             onClick={this.handleClick}>
                                                            Доставка по РФ
                                                        </div>
                                                    </div>
                                                    <div className="fencing-system-have-questions-button">
                                                        <i className="far far fa-folder"/>
                                                        <a href="/files/instr.doc"
                                                           className="fencing-system-have-questions-link" download>
                                                            Монтажные схемы
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <div className="fencing-system-examples">
                                    <Grid>
                                        <Row>
                                            <Col xs={12}>
                                                <h1>Примеры использования системы ограждений</h1>
                                                <div className="fencing-system-examples-wrapper">
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture()}>
                                                        <img src={ExampleImage01} alt="example-01"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(1)}>
                                                        <img src={ExampleImage02} alt="example-02"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(2)}>
                                                        <img src={ExampleImage03} alt="example-03"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(3)}>
                                                        <img src={ExampleImage04} alt="example-04"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(4)}>
                                                        <img src={ExampleImage05} alt="example-05"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(5)}>
                                                        <img src={ExampleImage06} alt="example-06"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="fencing-system-example-image-wrapper" onClick={() => this.openPicture(6)}>
                                                        <img src={ExampleImage07} alt="example-07"
                                                             className="img-responsive"/>
                                                        <span className="fencing-system-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Grid>
                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={images[photoIndex]}
                                            nextSrc={images[(photoIndex + 1) % images.length]}
                                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                            onCloseRequest={() => this.setState({isOpen: false})}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % images.length,
                                                })
                                            }
                                        />
                                    )}
                                </div>
                                <div className="fencing-system-description">
                                    <Grid>
                                        <Row>
                                            <Col xs={12}>
                                                <h1>Ограждения из ДПК DECKLINE</h1>
                                                <p>
                                                    Террасная доска DECKLINE (Россия) - это новый, качественный и современный
                                                    настил из древесно-полимерного композита. Профиль имеет три рабочие
                                                    поверхности - мелкий вельвет, широкая полоска и текстура дерева. Цвет
                                                    песочный, светло-коричневый, темно-коричневый и черный. Доска DECKLINE
                                                    (Россия) производится с учетом всех эксплуатационных нагрузок - сфера
                                                    применения от небольших частных террас до мест общественного
                                                    пользования. Материал не прихотлив и не требует дополнительной
                                                    обработки. Большая номенклатура комплектующих элементов позволяет
                                                    реализовать самые сложные проекты террас и настилов.
                                                </p>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </div>
                                <div className="fencing-system-certificates">
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
        pages: state.pages,
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(FencingSystemPage);
