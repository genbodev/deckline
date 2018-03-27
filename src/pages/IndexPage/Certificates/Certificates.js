import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';

import './Certificates.css';

import certificate007 from './sertif.jpeg';
import certificate008 from './titul.jpg';

const images = [
    certificate007,
    certificate008
];

class Certificates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'СЕРТИФИКАТЫ',
            photoIndex: 0,
            isOpen: false
        };
    }

    openCertificate(key = 0) {
        this.setState({photoIndex: key, isOpen: true});
    }

    render() {
        const {photoIndex, isOpen, title} = this.state;
        return (
            <div id="Certificates">
                <Grid>
                    <h2>{title}</h2>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col xs={4}>
                            <img onClick={() => this.openCertificate()} src={certificate007} alt="certificate-01"
                                 className="img-certificate img-responsive"/>
                        </Col>
                        <Col xs={4}>
                            <img onClick={() => this.openCertificate(1)} src={certificate008} alt="certificate-08"
                                 className="img-certificate img-responsive"/>
                        </Col>
                        <Col xs={2}>
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
        );
    }
}

export default Certificates;
