import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';

import './ScrollTop.css';

class ScrollTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollText : 'На верх',
            scrollOffset : 160
        };
    }

    componentDidMount() {
    }

    render() {
        const { scrollText, scrollOffset } = this.state;
        return (
            <ScrollToTop showUnder={scrollOffset}>
                <div id="Scroll-to-top">
                    <i className="scroll-icon far fa-arrow-alt-circle-up"></i>
                    <p className="scroll-text">{scrollText}</p>
                </div>
            </ScrollToTop>
        );
    }


}


export default ScrollTop;