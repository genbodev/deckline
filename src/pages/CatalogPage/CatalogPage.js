import React, { Component, Fragment } from 'react';
import { StickyContainer } from 'react-sticky';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Col, Row, Clearfix } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

import './CatalogPage.css';

import { drawSticky, createMarkup, getPageDataBySlug } from "../../functions";
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import config from "../../config";


import SandColorImage from './sand.png';
import LightBrownColorImage from './light-brown.png';
import DarkBrownColorImage from './dark-brown.png';
import BlackColorImage from './black.png';


const {catalog} = config.SLUGS;
const {DEFAULT_TITLE} = config;

class CatalogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terraceNavHeader: 'Террасная доска и комплектующие',
            fencingNavHeader: 'Система ограждений',
            slug: catalog
        };
    }

    getContentById(posts = [], id) {
        debugger;
        let currentPost = '';
        if (posts && posts.length) {
            posts.map((post) => {
                if (post.id === +id) currentPost = post;
                return false;
            });
        }
        if (typeof currentPost === "string") {
            let currentPost = posts[0];
            posts.map((post) => {
                if (post.acf && post.acf.mainmain && post.acf.mainmain[0] && post.acf.mainmain[0]) {
                    currentPost = post;
                }
                return false;
            });
            this.props.location.query.id = currentPost.id;
            return currentPost;
        } else {
            return currentPost;
        }
    }

    render() {
        const {posts} = this.props;
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;

        if (posts && posts.isPostsReady && isSettingsReady && isAdminReady && isPagesReady) {
            const {terrace, fencing, product} = posts;
            const {query} = this.props.location;
            let {id} = query;
            const {terraceNavHeader, fencingNavHeader} = this.state;
            const content = this.getContentById(product, id);
            const {slug} = this.state;
            const {data} = this.props.pages;
            const currentPage = getPageDataBySlug(data, slug);
            const title = currentPage && (currentPage.title.rendered.length > 1) ? `${DEFAULT_TITLE} - ${currentPage.title.rendered}` : DEFAULT_TITLE;
            const description = currentPage.acf.meta_description;
            const keywords = currentPage.acf.meta_key_words;

            let isColor = false;
            if (content.acf && content.acf.colors && content.acf.colors[0]) {
                isColor = true;
            }

            return (
                <div id="CatalogPage" className="wrapper">
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
                                <Grid>
                                    <Row>
                                        <Col md={3}>
                                            <hr/>
                                            <div className="vertical-menu">
                                                <h2 className="vertical-menu-title">{terraceNavHeader}</h2>
                                                {terrace.map((product, key) => (
                                                    <Link activeClassName="active" key={key}
                                                          to={`/catalog?id=${product.id}`}><i
                                                        className="fas fa-caret-right"></i>&nbsp;{product.title.rendered}
                                                    </Link>))}
                                            </div>
                                            <hr/>
                                            <div className="vertical-menu">
                                                <h2 className="vertical-menu-title">{fencingNavHeader}</h2>
                                                {fencing.map((product, key) => (
                                                    <Link activeClassName="active" key={key}
                                                          to={`/catalog?id=${product.id}`}><i
                                                        className="fas fa-caret-right"></i>&nbsp;{product.title.rendered}
                                                    </Link>))}
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <h2 className="product-title">{content.title.rendered}</h2>
                                            <div className="product-img">
                                                {(content.better_featured_image && content.better_featured_image.source_url) &&
                                                <img className="img-responsive"
                                                     src={content.better_featured_image.source_url} alt=""/>}
                                            </div>

                                            {isColor &&
                                            <Row>
                                                <Col xs={0} md={2} lg={2}>
                                                </Col>
                                                <Col xs={6} md={2} lg={2}>
                                                    <div
                                                        className="catalog-colors-main-wrapper catalog-colors-main-wrapper-left">
                                                        <div className="catalog-colors-image-text-wrapper">
                                                            <img src={SandColorImage} alt="sand-color"
                                                                 className="img-responsive"/>
                                                            <div className="catalog-colors-text">Бук</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={2} lg={2}>
                                                    <div
                                                        className="catalog-colors-main-wrapper catalog-colors-main-wrapper-right">
                                                        <div className="catalog-colors-image-text-wrapper">
                                                            <img src={LightBrownColorImage} alt="light-brown-color"
                                                                 className="img-responsive"/>
                                                            <div className="catalog-colors-text">Венге светлый</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Clearfix visibleXsBlock/>
                                                <Col xs={6} md={2} lg={2}>
                                                    <div
                                                        className="catalog-colors-main-wrapper catalog-colors-main-wrapper-left">
                                                        <div className="catalog-colors-image-text-wrapper">
                                                            <img src={DarkBrownColorImage} alt="dark-brown"
                                                                 className="img-responsive"/>
                                                            <div className="catalog-colors-text">Венге темный</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={2} lg={2}>
                                                    <div
                                                        className="catalog-colors-main-wrapper catalog-colors-main-wrapper-right">
                                                        <div className="catalog-colors-image-text-wrapper">
                                                            <img src={BlackColorImage} alt="black-color"
                                                                 className="img-responsive"/>
                                                            <div className="catalog-colors-text">Черный</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={0} md={2} lg={2}>
                                                </Col>
                                            </Row>
                                            }
                                            <div
                                                dangerouslySetInnerHTML={createMarkup(content.content.rendered)}>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                                <Grid>
                                </Grid>
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
        posts: state.posts,
        admin: state.admin,
        pages: state.pages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
