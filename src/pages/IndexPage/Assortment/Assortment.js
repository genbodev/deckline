import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

import './Assortment.css';

import img001 from './glav-01.jpg';
import img002 from './glav-02.jpg';

class Assortment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: img001,
                    title: <h2>ТЕРРАСНАЯ ДОСКА <strong>ИЗ ДПК</strong></h2>,
                    text: 'Декинг, или другими словами террасная доска композитная - это один из самых современных материалов в линейке уличных напольных покрытий. Древесная мука и полимер создает уникальные свойства данному материалу.',
                    tags: ['Террасная доска', 'Универсальная доска', 'Уголок', 'Ступень', 'Кляймер пластиковый', 'Стартовый кляймер', 'Лага']
                },
                {
                    img: img002,
                    title: <h2>СИСТЕМА <strong>ОГРАЖДЕНИЙ</strong></h2>,
                    text: 'Ограждения из ДПК очень практичные в использовании и имеют длительный срок эксплуатации. Кроме того, они совершенно безвредны для окружающей среды, так как материалы, которые входят в состав полимера, в дальнейшем можно вторично перерабатывать. Срок эксплуатации такого ограждения более 10 лет, при повреждение любой детали ее легко можно сменить на новую сохранив общий вид.',
                    tags: ['Ограждения', 'Столб', 'Перила', 'Балясина', 'Крышка', 'Юбка', 'Крепёж для перил', 'Крепёж для балясины прямой', 'Крепёж для балясины угловой']
                }
            ]
        };
    }

    render() {
        const {items} = this.state;
        const {terrace, thermo} = this.props.posts;
        //console.log(`terrace`, terrace, thermo);
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
                                                    {(terrace && terrace.length) ? terrace.map((tagItem, key) => {
                                                        if (key !== terrace.length - 1) {
                                                            return <span className="assortment-tag" key={key}>{<Link activeClassName="active" key={key} to={`/catalog?id=${tagItem.id}`} target="_blank">{tagItem.title.rendered}</Link>}&nbsp;,&nbsp;</span>
                                                        } else {
                                                            return <span className="assortment-tag" key={key}>{<Link activeClassName="active" key={key} to={`/catalog?id=${tagItem.id}`} target="_blank">{tagItem.title.rendered}</Link>}&nbsp;.</span>
                                                        }
                                                    }) : null}
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
                                                    {(thermo && thermo.length) ? thermo.map((tagItem, key) => {
                                                        if (key !== item.tags.length - 1) {
                                                            return <span className="assortment-tag" key={key}>{<Link activeClassName="active" key={key} to={`/catalog?id=${tagItem.id}`} target="_blank">{tagItem.title.rendered}</Link>}&nbsp;,&nbsp;</span>
                                                        } else {
                                                            return <span className="assortment-tag" key={key}>{<Link activeClassName="active" key={key} to={`/catalog?id=${tagItem.id}`} target="_blank">{tagItem.title.rendered}</Link>}&nbsp;.</span>
                                                        }

                                                    }) : null}
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
