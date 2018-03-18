import React, { Component, Fragment } from 'react';
import { StickyContainer } from 'react-sticky';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Grid, Col, Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

import './CatalogPage.css';

import { drawSticky, createMarkup } from "../../functions";
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

class CatalogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            terraceNavHeader : 'Комплектующие для террасной доски',
            thermoNavHeader : 'Комплектующие для термо доски'
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

        if (posts && posts.isPostsReady) {
            const {terrace, thermo, product} = posts;
            const {query} = this.props.location;
            const {id} = query;
            const {terraceNavHeader, thermoNavHeader} = this.state;
            const content = this.getContentById(product, id);

            return (
                <div id="CatalogPage" className="wrapper">
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
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
