import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import { Link } from 'react-router';

import './PartnersInfo.css';

import partnerLogo001 from './logo-kompan-01.jpg';
import partnerLogo002 from './logo-kompan-02.jpg';
import partnerLogo003 from './logo-kompan-03.jpg';
import partnerLogo004 from './logo-kompan-07-1.jpg';
import partnerLogo005 from './logo-kompan-08.jpg';
import partnerLogo006 from './logo-kompan-09.jpg';

class PartnersInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partnersLogos: [
                {
                    img: partnerLogo001,
                    slug: 'http://terra-wood.ru/products/terrasnaya-doska-iz-dpk/terrasnaya-doska-polivan-rossiya'
                },
                {
                    img: partnerLogo002,
                    slug: 'http://dvkomplekt.com/deking-terrasnaya-doska'
                },
                {
                    img: partnerLogo003,
                    slug: 'http://sidehouse.ru/terrasnaya-doska/terrasnaya-doska/'
                },
                {
                    img: partnerLogo004,
                    slug: 'http://www.vsyafanera.ru/price/deking/'
                },
                {
                    img: partnerLogo005,
                    slug: 'http://arkatura.com/deking-dpk-dlya-terras/'
                },
                {
                    img: partnerLogo006,
                    slug: 'href="http://wpc-kit.ru/magazin/terrasnay-doska/polivan'
                }
            ]
        }
    }

    componentDidMount() {
    }

    render() {
        const {partnersLogos} = this.state;
        return (
            <div id="PartnersInfo">
                <Grid>
                    {partnersLogos.map((logo, key) => (
                        <Col key={key} lg={2} md={4} xs={6}><Link to={logo.slug} target="_blank"><img className="img-responsive" src={logo.img}
                                                                              alt={`partner-logo-${key}`}/></Link></Col>
                    ))}
                </Grid>
            </div>
        );
    }


}


export default PartnersInfo;
