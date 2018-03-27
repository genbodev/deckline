import React, { Component, Fragment } from 'react';
import { Grid, Col} from 'react-bootstrap';

import './PostsPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from "../../functions";

import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

class PostsPage extends Component {
    render() {
        const {posts} = this.props;
        if (posts) {
            const {regular} = posts;
            return (
                <div id="PostsPage" className="wrapper">
                    <div className="content">
                        <TopPanelComponent/>
                        <StickyContainer>
                            {drawSticky(<MainNavigation/>)}
                            <MobileNavigation/>
                            <Fragment>
                                <Grid>
                                    {regular.map((post, key) => (
                                        <Col md={6} key={key}>
                                            <img src={post.better_featured_image.source_url} className="img-responsive" alt=""/>
                                            <h5 key={key}>{post.title.rendered}</h5>
                                        </Col>
                                    ))}
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
            return (<h1>Loading...</h1>);
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
