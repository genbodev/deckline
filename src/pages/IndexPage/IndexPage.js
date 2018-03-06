import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';

import './IndexPage.css';

import { drawSticky, createMarkup } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';

class IndexPage extends Component {
    componentDidMount() {
    }

    render() {

        if (true) {
            return (
                <div id="IndexPage" className="wrapper">
                    <div className="content">
                        <TopPanelComponent/>
                        <StickyContainer>
                            {drawSticky(<MainNavigation/>)}
                            <MobileNavigation/>
                            <Fragment>
                                    {<div dangerouslySetInnerHTML={createMarkup("<p>Content here</p>")}/>}
                            </Fragment>
                        </StickyContainer>
                    </div>
                    <div className="footer">
                        <Footer/>
                    </div>
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
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
