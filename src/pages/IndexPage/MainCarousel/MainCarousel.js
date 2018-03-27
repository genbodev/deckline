import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import './MainCarousel.css';

import banerOne from './baner-gl-002.jpg';
import banerTwo from './baner-gl-004.jpg';
import banerThree from './baner-gl-009.jpg';
import banerFour from './baner-gl-010.jpg';
import banerFive from './baner-gl-011.jpg';
import banerSix from './baner-gl-018.jpg';
import banerSeven from './baner-gl-019.jpg';

class MainCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideHeight: 500,
            slides: [
                {
                    title: 'Изделия из ДПК',
                    image: banerOne,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerTwo,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerThree,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerFour,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerFive,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerSix,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
                {
                    title: 'Изделия из ДПК',
                    image: banerSeven,
                    description: 'Собственного производства',
                    href: '/',
                    additionalContent : null
                },
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
                                <h3 className="animated zoomInDown" data-wow-duration="2s" data-wow-delay="5s">{slide.title}</h3>
                                <p className="animated jackInTheBox" data-wow-duration="4s" data-wow-delay="10s">{slide.description}</p>
                                {slide.additionalContent}
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        );
    }


}


export default MainCarousel;
