import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
//import AnimatedNumber from 'react-animated-number';

import slideOne from './doska-i-ogragd.jpg';
import iconOne from './01-58x58.png';
import iconTwo from './02-58x58.png';
import iconThree from './03-58x58.png';
import iconFour from './05-58x58.png';
import iconFive from './06-58x58.png';
import iconSix from './07-58x58.png';

import iconMaterial from './002-material.png';

import './Benefits.css';

class Benefits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'DECKLINE',
            title: 'Преимущества продукции',
            lead: 'На нашем сайте представлен широкий ассортимент изделий из древесно-полимерного композита собственного производства. Мы гарантируем нашим клиентам поставку только качественной продукции',
            benefitsList: [
                {icon: iconOne, text: 'Долговечность. Срок службы 25 лет'},
                {icon: iconTwo, text: 'Не подвержена разрушению от насекомых и грибка'},
                {icon: iconThree, text: 'Благодаря составу - экологичность 95%'},
                {icon: iconFour, text: 'Красивый внешний вид, имеющий текстуру дерева'},
                {icon: iconFive, text: 'Не гниёт, не чернеет, не текут смолы'},
                {icon: iconSix, text: 'Не трескается, не скользит, простой монтаж, высокая твёрдость'}
            ],
            clientsList: [
                {icon: <img src={iconMaterial} alt="icon-material"/>, number: 4950, text: 'кв.м. производим в месяц'},
                {icon: <i className="fas fa-user"></i>, number: 22, text: 'Дилера в России'},
                {icon: <i className="fas fa-coffee"></i>, number: 3800, text: 'Довольных клиентов'},
                {icon: <i className="fas fa-chart-bar"></i>, number: 420, text: 'Обращений по рекомендации'}
            ],
            numberAnimationDuration : 5000
        };
    }

    componentDidMount() {
    }

    render() {
        const { brand, title, lead/*, numberAnimationDuration*/ } = this.state;
        return (
            <div id="Benefits">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2 className="title">{title}&nbsp;<strong>{brand}</strong></h2>
                            <p className="lead">{lead}</p>
                            <div className="slide-one">
                                <img src={slideOne} alt="slideOne" className="img-responsive wow bounceInLeft"
                                     data-wow-duration="2s"/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid className="benefits-list">
                    <Grid>
                        <Row>
                            {this.state.benefitsList.map((benefit, key) => (
                                <Col md={6} lg={4} key={key}>
                                    <div className="benefit">
                                        <Row>
                                            <Col xs={3}><img src={benefit.icon} alt={`icon-${key}`}/></Col>
                                            <Col xs={9}><p>{benefit.text}</p></Col>
                                        </Row>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Grid>
                </Grid>
                {/*<Grid className="clients-list">
                    <Row className="wow slideInRight" data-wow-duration="2s">
                        {this.state.clientsList.map((client, key) => (
                            <Col key={key} md={3} className="client text-center">
                                <div className="client-icon">
                                    {client.icon}
                                </div>
                                <AnimatedNumber className="animate-number" component="span" value={client.number}
                                                duration={numberAnimationDuration} initialValue={0} formatValue={n => n.toFixed(0)}/>
                                <h4 className="client-text">{client.text}</h4>
                            </Col>
                        ))}
                    </Row>
                </Grid>*/}
            </div>
        );
    }


}


export default Benefits;
