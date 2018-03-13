import React, { Component, Fragment } from 'react';
import { Grid, Carousel } from 'react-bootstrap';

import './Partners.css';

import parallax from './parallax-2.jpg';

class Partners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: <h2 className="text-center">Наши <strong>Партнеры</strong></h2>,
            lead: 'Мы всегда стараемся удовлетворить потребности наших клиентов',
            slides: [
                {
                    comment: 'Нас все устраивает в работе компании DECKLINE GROUP, особо хотим отметить коммуникабельность ваших сотрудников, с которыми всегда приятно общаться. В связи с чем выражаем благодарность за организацию рабочих процессов, благодаря которым вы можете оперативно и четко выполнять наши заказы. .',
                    author: <Fragment><strong>Сергей Ильич</strong><span>ТЕРРАВУД</span></Fragment>
                },
                {
                    comment: 'Нас все устраивает в работе компании DECKLINE GROUP, особо хотим отметить коммуникабельность ваших сотрудников, с которыми всегда приятно общаться. В связи с чем выражаем благодарность за организацию рабочих процессов, благодаря которым вы можете оперативно и четко выполнять наши заказы. .',
                    author: <Fragment><strong>Сергей Ильич</strong><span>ТЕРРАВУД</span></Fragment>
                },
                {
                    comment: 'Нас все устраивает в работе компании DECKLINE GROUP, особо хотим отметить коммуникабельность ваших сотрудников, с которыми всегда приятно общаться. В связи с чем выражаем благодарность за организацию рабочих процессов, благодаря которым вы можете оперативно и четко выполнять наши заказы. .',
                    author: <Fragment><strong>Сергей Ильич</strong><span>ТЕРРАВУД</span></Fragment>
                },
                {
                    comment: 'Нас все устраивает в работе компании DECKLINE GROUP, особо хотим отметить коммуникабельность ваших сотрудников, с которыми всегда приятно общаться. В связи с чем выражаем благодарность за организацию рабочих процессов, благодаря которым вы можете оперативно и четко выполнять наши заказы. .',
                    author: <Fragment><strong>Сергей Ильич</strong><span>ТЕРРАВУД</span></Fragment>
                }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        const {title, lead, slides} = this.state;
        return (
            <div id="Partners">
                <Grid>
                    {title}
                    <p className="lead text-center">{lead}</p>
                </Grid>
                <Carousel prevIcon={false} nextIcon={false}>
                    {slides.map((slide, key) => (
                        <Carousel.Item key={key}>
                            <img height={200} alt="900x500" src={parallax}/>
                            <Carousel.Caption>
                                <div className="photo-wrap">
                                    <div className="photo">
                                    </div>
                                </div>
                                <p className="comment">{slide.comment}</p>
                                <p className="comment-author">{slide.author}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }


}


export default Partners;
