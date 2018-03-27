import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import './InstructionsPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

import WebInstructionImage from './web-ico.jpg';
import OfflineInstructionImage from './pdf-ico.jpg';
import CatalogImage from './katalog-400.jpg';
import AlbumImage from './teh-resh-400.jpg';
import OpinionImage from './ecpert-zacl-400.jpg';

class InstructionsPage extends Component {
    render() {
        return (
            <div id="InstructionsPage">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="instructions-main">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="instructions-main-caption">
                                                <h1>Инструкция по монтажу террасной доски</h1>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <div className="instructions-main-image-text-wrapper">
                                                <div className="instructions-main-image">
                                                    <img src={WebInstructionImage} alt="web-instruction"
                                                         className="img-responsive"/>
                                                </div>
                                                <div className="instructions-main-text">
                                                    <p>
                                                        Инструкция по монтажу террасной доски<br/>
                                                        <a href="instrukcia-po-montagu-terrsy.pdf">Скачать</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="instructions-main-image-text-wrapper">
                                                <div className="instructions-main-image">
                                                    <img src={OfflineInstructionImage} alt="web-instruction"
                                                         className="img-responsive"/>
                                                </div>
                                                <div className="instructions-main-text">
                                                    <p>
                                                        Монтаж террасной доски из ДПК должен осуществляться на ровной
                                                        предварительно подготовленной поверхности. Для монтажа
                                                        необходимо
                                                        подготовить...<br/>
                                                        <Link to="terrace-installation">Подробнее</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="instructions-additionally">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Дополнительно</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <div className="instructions-additionally-image-text-wrapper">
                                                <div className="instructions-additionally-image">
                                                    <a href="buklet-a4-FINAL.pdf">
                                                        <img src={CatalogImage} alt="catalog"
                                                             className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="instructions-additionally-text">
                                                    <a href="buklet-a4-FINAL.pdf">Каталог продукции</a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="instructions-additionally-image-text-wrapper">
                                                <div className="instructions-additionally-image">
                                                    <a href="albom-tehnicheskih-resheby-deckline-group-2.pdf">
                                                        <img src={AlbumImage} alt="album" className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="instructions-additionally-text">
                                                    <a href="albom-tehnicheskih-resheby-deckline-group-2.pdf">Альбом
                                                        технических решений</a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={4}>
                                            <div className="instructions-additionally-image-text-wrapper">
                                                <div className="instructions-additionally-image">
                                                    <a href="zakluchenie-po-ispytaniyam-dpk-deckline.pdf">
                                                        <img src={OpinionImage} alt="opinion"
                                                             className="img-responsive"/>
                                                    </a>
                                                </div>
                                                <div className="instructions-additionally-text">
                                                    <a href="zakluchenie-po-ispytaniyam-dpk-deckline.pdf">Экспертное
                                                        заключение по испытаниям</a>
                                                </div>
                                            </div>
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
    }

}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsPage);
