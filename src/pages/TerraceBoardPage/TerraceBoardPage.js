import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';
import Lightbox from 'react-image-lightbox';

import './TerraceBoardPage.css';
import { drawSticky, getPageDataBySlug } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import swal from 'sweetalert2'

import PageCarousel from './PageCarousel/PageCarousel';

import SandColorImage from './sand.png';
import LightBrownColorImage from './light-brown.png';
import DarkBrownColorImage from './dark-brown.png';
import BlackColorImage from './black.png';

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
import config from "../../config";

const {terraceBoard} = config.SLUGS;
const {DEFAULT_TITLE} = config;

const images = [
    ExampleImage01,
    ExampleImage02,
    ExampleImage03,
    ExampleImage04,
    ExampleImage05,
    ExampleImage06,
    ExampleImage07,
    ExampleImage08
];

class TerraceBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: terraceBoard,
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
            const {terrace} = this.props.posts;
            return (
                <div id="TerraceBoardPage">
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
                                                        <div className="terrace-board-colors-text">Бук</div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={6} md={2} lg={1}>
                                                <div
                                                    className="terrace-board-colors-main-wrapper terrace-board-colors-main-wrapper-right">
                                                    <div className="terrace-board-colors-image-text-wrapper">
                                                        <img src={LightBrownColorImage} alt="light-brown-color"
                                                             className="img-responsive"/>
                                                        <div className="terrace-board-colors-text">Венге светлый</div>
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
                                                        <div className="terrace-board-colors-text">Венге темный</div>
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
                                                    <div className="terrace-board-colors-parameters-value">24 мм</div>
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
                                        <h1>Комплектующие</h1>
                                        <div className="terrace-board-accessories-wrapper">
                                            {(terrace && terrace.length) ? terrace.map((tagItem, key) => {
                                                if (tagItem['better_featured_image']) {
                                                    return (<div key={key} className="terrace-board-products-image-text-wrapper">
                                                        <div className="terrace-board-products-image-wrapper">
                                                            <Link activeClassName="active"
                                                                  to={`/catalog?id=${tagItem.id}`} target="_blank">
                                                                <img
                                                                    src={`${tagItem['better_featured_image']['source_url']}`}
                                                                    alt={`product-${key}`}
                                                                    className=""/>
                                                            </Link>
                                                        </div>
                                                        <div className="terrace-board-products-text">
                                                            <Link activeClassName="active"
                                                                  to={`/catalog?id=${tagItem.id}`} target="_blank">
                                                                {tagItem.title.rendered}
                                                            </Link>
                                                        </div>
                                                    </div>)
                                                } else {
                                                    return null;
                                                }
                                            }) : null}
                                        </div>
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
                                                        <a href="/files/doska-price.xls"
                                                           className="terrace-board-have-questions-link" download>
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
                                                        <a href="/files/prices.zip"
                                                           className="terrace-board-have-questions-link" download>
                                                            Оптовикам
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} lg={3}>
                                                <div className="terrace-board-have-questions-buttons-wrapper">
                                                    <div className="terrace-board-have-questions-button">
                                                        <i className="fas fa-car"/>
                                                        <div className="terrace-board-have-questions-link"
                                                             onClick={this.handleClick}>
                                                            Доставка по РФ
                                                        </div>
                                                    </div>
                                                    <div className="terrace-board-have-questions-button">
                                                        <i className="far far fa-folder"/>
                                                        <a href="/files/instr.doc"
                                                           className="terrace-board-have-questions-link" download>
                                                            Монтажные схемы
                                                        </a>
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
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture()}>
                                                        <img src={ExampleImage01} alt="example-01"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(1)}>
                                                        <img src={ExampleImage02} alt="example-02"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(2)}>
                                                        <img src={ExampleImage03} alt="example-03"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(3)}>
                                                        <img src={ExampleImage04} alt="example-04"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(4)}>
                                                        <img src={ExampleImage05} alt="example-05"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(5)}>
                                                        <img src={ExampleImage06} alt="example-06"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(6)}>
                                                        <img src={ExampleImage07} alt="example-07"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
                                                            className="fas fa-search"/></span>
                                                    </div>
                                                    <div className="terrace-board-example-image-wrapper" onClick={() => this.openPicture(7)}>
                                                        <img src={ExampleImage08} alt="example-08"
                                                             className="img-responsive"/>
                                                        <span className="terrace-board-example-zoom"><i
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
        } else {
            return(
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

export default connect(mapStateToProps, mapDispatchToProps)(TerraceBoardPage);
