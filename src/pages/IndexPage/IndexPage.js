import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

import './IndexPage.css';

import config from '../../config';
import { drawSticky, getPageDataBySlug } from '../../functions';
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

const {home} = config.SLUGS;
const {DEFAULT_TITLE} = config;

class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug: home
        };
    }

    render() {
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;

        if (isSettingsReady && isAdminReady && isPagesReady) {
            const {slug} = this.state;
            const {data} = this.props.pages;
            const currentPage = getPageDataBySlug(data, slug);
            const title = currentPage.title.rendered.length > 1 ? `${DEFAULT_TITLE} - ${currentPage.title.rendered}` : DEFAULT_TITLE;
            const description = currentPage.acf.meta_description;
            const keywords = currentPage.acf.meta_key_words;

            return (
                <div id="IndexPage" className="wrapper">
                    <Helmet>
                        <title>{title}</title>
                        <meta name="keywords" content={keywords}/>
                        <meta name="description" content={description}/>
                    </Helmet>
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
