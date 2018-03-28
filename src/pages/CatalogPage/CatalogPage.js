import React, { Component, Fragment } from 'react';
import { StickyContainer } from 'react-sticky';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
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
const {catalog} = config.SLUGS;
const {DEFAULT_TITLE} = config;

class CatalogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terraceNavHeader : 'Комплектующие для террасной доски',
            thermoNavHeader : 'Комплектующие для термо доски',
            slug: catalog
        };
    }

    getContentById(posts = [], id) {
        let currentPost = '';
        if (posts && posts.length) {
            posts.map((post) => {
                if (post.id === +id) currentPost = post;
                return false;
            });
        }
        return currentPost;
    }

    render() {
        const {posts} = this.props;
        const {isSettingsReady, isAdminReady} = this.props.admin;
        const {isPagesReady} = this.props.pages;

        if (posts && posts.isPostsReady && isSettingsReady && isAdminReady && isPagesReady) {
            const {terrace, thermo, product} = posts;
            const {query} = this.props.location;
            const {id} = query;
            const {terraceNavHeader, thermoNavHeader} = this.state;
            const content = this.getContentById(product, id);
            const {slug} = this.state;
            const {data} = this.props.pages;
            const currentPage = getPageDataBySlug(data, slug);
            const title = currentPage.title.rendered.length > 1 ? `${DEFAULT_TITLE} - ${currentPage.title.rendered}` : DEFAULT_TITLE;
            const description = currentPage.acf.meta_description;
            const keywords = currentPage.acf.meta_key_words;

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
                                                          to={`/catalog/${product.slug}?id=${product.id}`}><i className="fas fa-caret-right"></i>&nbsp;{product.title.rendered}</Link>))}
                                            </div>
                                            <hr/>
                                            <div className="vertical-menu">
                                                <h2 className="vertical-menu-title">{thermoNavHeader}</h2>
                                                {thermo.map((product, key) => (
                                                    <Link activeClassName="active" key={key}
                                                          to={`/catalog/${product.slug}?id=${product.id}`}><i className="fas fa-caret-right"></i>&nbsp;{product.title.rendered}</Link>))}
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <h2 className="product-title">{content.title.rendered}</h2>
                                            <div className="product-img">
                                                <img className="img-responsive" src={content.better_featured_image.source_url} alt=""/>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={createMarkup(content.content.rendered)}></div>
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
