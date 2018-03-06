import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

import './IndexPage.css';

import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';

function createMarkup(html) {
    return {__html: html};
}

function drawSticky(stickyComponent) {
    return (
        <Sticky>
            {
                ({
                     style,

                     // the following are also available but unused in this example
                     isSticky,
                     wasSticky,
                     distanceFromTop,
                     distanceFromBottom,
                     calculatedHeight
                 }) => {
                    return (
                        <div style={style} className={isSticky ? 'sticky' : 'sticky-default'}>
                            {stickyComponent}
                        </div>
                    )
                }
            }
        </Sticky>);
}

class IndexPage extends Component {
    componentDidMount() {
    }

    render() {

        //const adminData = this.props.admin ? this.props.admin.data : null;
        //const adminSettings = this.props.admin ? this.props.admin.settings : null;

        if (true) {
            return (
                <div id="IndexPage" className="App">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="content"><p>Content here</p></div>
                        </Fragment>
                    </StickyContainer>
                    <Footer/>
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }
    }

}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        pages: state.pages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
