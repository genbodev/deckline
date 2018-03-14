import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import './Offers.css';


class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : <h3>Предоставляем <strong>выгодные</strong> условия для всех наших партнёров.  Мы нацелены на <strong>длительное</strong> сотрудничество.</h3>,
            lead : <p className='lead'>Станьте <strong>первым дилером</strong> в вашем городе</p>,
            buttonText: 'Контакты!',
            buttonSlug: '/contacts'
        }
    }

    componentDidMount() {
    }

    render() {
        const {header, lead, buttonText, buttonSlug} = this.state;
        return (
            <div id="Offers">
                <Grid>
                    <Col md={9} className="offers-row">
                        {header}
                        {lead}
                    </Col>
                    <Col md={3} className="offers-row">
                        <Button className="offers-btn" href={buttonSlug}>{buttonText}</Button>
                    </Col>
                </Grid>
            </div>
        );
    }


}


export default Offers;
