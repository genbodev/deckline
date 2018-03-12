import React, { Component } from 'react';
import { Grid, Col, Row, Tabs, Tab } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

import './Certificates.css';

import exam from './001-exam-gren.svg';
import fire from './002-fire-extinguisher-gren.svg';
import diploma from './003-diploma-gren.svg';
import certificate001 from './sootvetstvija-600x865.jpg';
import certificate002 from './iso-600x865.jpg';
import certificate003 from './razreshenienasootvetstvie-600x865.jpg';
import certificate004 from './pozharnyj-600x865.jpg';
import certificate005 from './ekspertnonzakl1-600x865.jpg';
import certificate006 from './ekspertnoezakl2-600x865.jpg';


const imagesOne = [
    certificate001,
    certificate002,
    certificate003,
];

const imagesTwo = [
    certificate004
];

const imagesThree = [
    certificate005,
    certificate006
];

class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsTitle: 'СЕРТИФИКАТЫ',
            tabsLeadOne: 'Вся наша продукция сертифицирована, а так же имеет пожарные сертификаты.',
            tabsLeadTwo: 'Мы постоянно проводим испытания, о чем свидетельствует собранные протоколы.',
            photoIndex: 0,
            photoIndexTwo: 0,
            photoIndexThree: 0,
            isOpen: false,
            isOpenTwo: false,
            isOpenThree: false
        };
    }

    componentDidMount() {
    }

    render() {
        const {photoIndex, isOpen, photoIndexTwo, isOpenTwo, isOpenThree, photoIndexThree, tabsTitle, tabsLeadOne, tabsLeadTwo} = this.state;
        return (
            <div id="Certificates">
                <Grid>
                    <h2 className="text-center">{tabsTitle}</h2>
                    <p className="text-center tab-p">{tabsLeadOne}</p>
                    <p className="text-center tab-p">{tabsLeadTwo}</p>
                    <Tabs defaultActiveKey={1} id="certificates-tabs">
                        <Tab eventKey={1} title={<div className="tab-title">
                            <div className="tab-img">
                                <img src={exam} width={50} alt="exam"/>
                            </div>
                            <div className="tab-text">
                                <p>Сертификаты соответствия</p>
                            </div>
                        </div>}>
                            <div className="tab-content">
                                <Row>
                                    <Col md={4} onClick={() => this.setState({ isOpen: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate001} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                    <Col md={4} onClick={() => this.setState({ isOpen: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate002} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                    <Col md={4}  onClick={() => this.setState({ isOpen: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate003} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                </Row>

                                    {isOpen && (
                                        <Lightbox
                                            mainSrc={imagesOne[photoIndex]}
                                            nextSrc={imagesOne[(photoIndex + 1) % imagesOne.length]}
                                            prevSrc={imagesOne[(photoIndex + imagesOne.length - 1) % imagesOne.length]}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + imagesOne.length - 1) % imagesOne.length,
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % imagesOne.length,
                                                })
                                            }
                                        />
                                    )}
                            </div>
                        </Tab>
                        <Tab eventKey={2} title={<div className="tab-title">
                            <div className="tab-img">
                                <img src={fire} width={50} alt="exam"/>
                            </div>
                            <div className="tab-text">
                                <p>Пожарные сертификаты</p>
                            </div>
                        </div>}>
                            <div className="tab-content">
                                <Row>
                                    <Col md={12} onClick={() => this.setState({ isOpenTwo: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate004} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                </Row>

                                {isOpenTwo && (
                                    <Lightbox
                                        mainSrc={imagesTwo[photoIndexTwo]}
                                        nextSrc={imagesTwo[(photoIndexTwo + 1) % imagesTwo.length]}
                                        prevSrc={imagesTwo[(photoIndexTwo + imagesTwo.length - 1) % imagesTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpenTwo: false })}
                                        onMovePrevRequest={() =>
                                            this.setState({
                                                photoIndexTwo: (photoIndexTwo + imagesTwo.length - 1) % imagesTwo.length,
                                            })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                photoIndexTwo: (photoIndexTwo + 1) % imagesTwo.length,
                                            })
                                        }
                                    />
                                )}
                            </div>
                        </Tab>
                        <Tab eventKey={3} title={<div className="tab-title">
                            <div className="tab-img">
                                <img src={diploma} width={50} alt="exam"/>
                            </div>
                            <div className="tab-text">
                                <p>Экспертное заключение</p>
                            </div>
                        </div>}>
                            <div className="tab-content">
                                <Row>
                                    <Col md={6} onClick={() => this.setState({ isOpenThree: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate005} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                    <Col md={6} onClick={() => this.setState({ isOpenThree: true })}>
                                        <div className="certificate-wrap">
                                            <img src={certificate006} width={210} alt="" className="img-responsive img-thumbnail"/>
                                        </div>
                                    </Col>
                                </Row>

                                {isOpenThree && (
                                    <Lightbox
                                        mainSrc={imagesThree[photoIndexThree]}
                                        nextSrc={imagesThree[(photoIndexThree + 1) % imagesThree.length]}
                                        prevSrc={imagesThree[(photoIndexThree + imagesThree.length - 1) % imagesThree.length]}
                                        onCloseRequest={() => this.setState({ isOpenThree: false })}
                                        onMovePrevRequest={() =>
                                            this.setState({
                                                photoIndexThree: (photoIndexThree + imagesThree.length - 1) % imagesThree.length,
                                            })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                photoIndexThree: (photoIndexThree + 1) % imagesThree.length,
                                            })
                                        }
                                    />
                                )}
                            </div>
                        </Tab>
                    </Tabs>
                </Grid>
            </div>
        );
    }


}


export default Certificates;
