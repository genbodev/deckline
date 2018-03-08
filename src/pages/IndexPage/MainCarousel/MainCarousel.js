import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './MainCarousel.css';

import banerOne from './baner-gl-002.jpg';
import banerTwo from './baner-gl-005.jpg';
import banerThree from './baner-gl-006.jpg';
import banerFour from './baner-gl-007.jpg';

class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideHeight: 500,
            slides: [
                {
                    title: 'Террасная доска для бизнеса',
                    image: banerOne,
                    description: 'Предложение для оптовых покупателей от производителя',
                    href: '/'
                },
                {
                    title: 'Террасные системы проверенные временем',
                    image: banerTwo,
                    description: 'Террасная доска DECKLINE на набережной Владивостока',
                    href: '/'
                },
                {
                    title: 'Терраса, как зона отдыха у воды',
                    image: banerThree,
                    description: 'Бассейны, пруды, водоемы, набережные - все это прекрасно сочетается с террасной доской.',
                    href: '/'
                },
                {
                    title: 'Новинка! Террасная доска с глубокой текстурой',
                    image: banerFour,
                    description: 'Скоро в продаже, стань первым в своем городе',
                    href: '/'
                }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        const {slides, slideHeight} = this.state;

        return (
            <div id="MainCarousel">
                <Carousel prevIcon={<i className="fas fa-caret-square-left prev"></i>}
                          nextIcon={<i className="fas fa-caret-square-right next"></i>}>
                    {slides.map((slide, key) => (
                        <Carousel.Item key={key}>
                            <img height={slideHeight} alt={`slide-${key}`} src={slide.image}/>
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }


}


export default MainCarousel;