import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import Loader from 'react-loader-spinner';

import './IndexPage.css';

import { drawSticky } from '../../functions';
import MainCarousel from './MainCarousel/MainCarousel';
import Cooperation from './Cooperation/Cooperation';
import Benefits from './Benefits/Benefits';
import Assortment from './Assortment/Assortment';
import Certificates from './Certificates/Certificates';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import ScrollTop from '../../components/ScrollTop/ScrollTop';


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;

        if (isSettingsReady && isAdminReady && isPagesReady) {
            return (
                <div id="IndexPage" className="wrapper">
                    <div className="content">
                        <TopPanelComponent/>
                        <StickyContainer>
                            {drawSticky(<MainNavigation/>)}
                            <MobileNavigation/>
                            <Fragment>
                                <MainCarousel/>
                                <Cooperation/>
                                <Benefits/>
                                <Assortment/>
                                <Certificates/>
                                <ScrollTop/>
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
                <div id="Loader">
                    <Loader type="Circles" color="#6c912b" height={80} width={80}/>
                </div>
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
