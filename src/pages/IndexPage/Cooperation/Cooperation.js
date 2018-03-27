import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import './Cooperation.css';

class Cooperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textOne: 'Вы ищите себе надежного партнера по поставкам',
            textTwo: 'Древесно-полимерного композита',
            textThree: 'Опишите свою компанию, и мы пришлем коммерческое предложения для вас.',
            buttonContacts: 'Контакты',
            buttonAbout: 'подробнее о нас.',
            buttonContactsHref: '/contacts',
            buttonAboutHref: '/about'
        };
    }

    componentDidMount() {
    }

    render() {
        const {textOne, textTwo, textThree, buttonContacts, buttonAbout, buttonAboutHref, buttonContactsHref} = this.state;
        return (
            <div id="Cooperation">
                <Grid>
                    <Col md={8}>
                        <p>{textOne}</p>
                        <p><strong>{textTwo}</strong></p>
                        <p>{textThree}</p>
                    </Col>
                    <Col md={4}>
                        <div className="cooperation-buttons">
                            <Button className="contacts-btn"><Link
                                to={buttonContactsHref}>{buttonContacts}</Link></Button>
                            <Button className="about-btn" bsStyle="link">
                                <Link to={buttonAboutHref}>{buttonAbout}</Link></Button>
                        </div>
                    </Col>
                </Grid>
            </div>
        );
    }


}


export default Cooperation;
