import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './PageCarousel.css';

import SlideImage01 from './doska-polivan-01.jpg';
import SlideImage02 from './doska-polivan-02.jpg';
import SlideImage03 from './doska-polivan-03.jpg';
import SlideImage04 from './doska-polivan-04.jpg';

class PageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideHeight: 500,
            slides: [
                {
                    title: 'Террасная доска',
                    image: SlideImage01,
                    description: 'Песочный цвет',
                    href: '/',
                    additionalContent: null
                },
                {
                    title: 'Террасная доска',
                    image: SlideImage02,
                    description: 'Светло-коричневый цвет',
                    href: '/',
                    additionalContent: null
                },
                {
                    title: 'Террасная доска',
                    image: SlideImage03,
                    description: 'Темно-коричневый цвет',
                    href: '/',
                    additionalContent: null
                },
                {
                    title: 'Террасная доска',
                    image: SlideImage04,
                    description: 'Черный цвет',
                    href: '/',
                    additionalContent: null
                }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        const {slides, slideHeight} = this.state;

        return (
            <div id="PageCarousel">
                <Carousel prevIcon={<i className="fas fa-caret-square-left prev"/>}
                          nextIcon={<i className="fas fa-caret-square-right next"/>}>
                    {slides.map((slide, key) => (
                        <Carousel.Item key={key}>
                            <div className="carousel-image-wrapper">
                                <img className="img-responsive" height={slideHeight} alt={`slide-${key}`} src={slide.image}/>
                            </div>
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }


}


export default PageCarousel;
