import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import './Assortment.css';

import img001 from './glav-01.jpg';
import img002 from './glav-03.jpg';

class Assortment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: img001,
                    title: <h2>ТЕРРАСНАЯ ДОСКА <strong>ИЗ ДПК</strong></h2>,
                    text: 'Декинг, или другими словами террасная доска композитная - это один из самых современных материалов в линейке уличных напольных покрытий. Древесная мука и полимер создает уникальные свойства данному материалу.',
                    tags: ['Террасная доска', 'Универсальная доска', 'Уголок', 'Заглушки', 'Кляймер металлический', 'Кляймер пластиковый', 'Стартовый кляймер', 'Лага']
                },
                {
                    img: img002,
                    title: <h2>ТЕРМОМОДИФИЦИРОВАННАЯ <strong>ДРЕВЕСИНА</strong></h2>,
                    text: 'Термомодифицированная древесина практически неуязвима для вредителей и влажности, обладает повышенной пожаробезопасностью, не подвергается гниению. После такой термической обработки, древесина по праву считается элитным отделочным и строительным материалом, который не требует замены в течение длительного времени.',
                    tags: ['Доска', 'Косой планкен (фасадная доска)', 'Брусок сосна А', 'Брусок сосна ЭКСТРА', 'Крепеж змейка (зазор 6 мм)']
                }
            ]
        };
    }

    render() {
        const {items} = this.state;
        return (
            <div id="Assortment">
                <Grid>
                    {items.map((item, key) => {
                        if (key % 2 === 0) {
                            return (
                                <div key={key} className="line-gray">
                                    <Row className="assortment-row">
                                        <Col md={4}>{<img src={item.img} alt={`item-${key}`}
                                                          className="img-responsive wow slideInLeft"
                                                          data-wow-duration="2s"/>}</Col>
                                        <Col md={8}>
                                            <div className="img-responsive wow slideInRight"
                                                 data-wow-duration="2s">
                                                {item.title}
                                                <p className="lead">{item.text}</p>
                                                <div className="assortment-list">
                                                    {item.tags.map((tagItem, key) => {
                                                        if (key !== item.tags.length - 1) {
                                                            return <span className="assortment-tag" key={key}>{tagItem}&nbsp;,&nbsp;</span>
                                                        } else {
                                                            return <span className="assortment-tag" key={key}>{tagItem}&nbsp;.</span>
                                                        }

                                                    })}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            );
                        } else {
                            return (
                                <div key={key} className="line-gray">
                                    <Row className="assortment-row">
                                        <Col md={8}>
                                            <div className="img-responsive wow slideInLeft"
                                                 data-wow-duration="2s">
                                                {item.title}
                                                <p className="lead">{item.text}</p>
                                                <div className="assortment-list">
                                                    {item.tags.map((tagItem, key) => {
                                                        if (key !== item.tags.length - 1) {
                                                            return <span className="assortment-tag" key={key}>{tagItem}&nbsp;,&nbsp;</span>
                                                        } else {
                                                            return <span className="assortment-tag" key={key}>{tagItem}&nbsp;.</span>
                                                        }

                                                    })}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={4}>{<img src={item.img} alt={`item-${key}`}
                                                          className="img-responsive wow slideInRight"
                                                          data-wow-duration="2s"/>}</Col>
                                    </Row>
                                </div>
                            );
                        }
                    })}
                </Grid>
            </div>
        );
    }


}


export default Assortment;
