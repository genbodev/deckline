import React, { Component } from 'react';

import './CatalogPage.css';
import { connect } from 'react-redux';
import wp from '../../index';
import CONFIG from '../../config';
import { getPostsData } from '../../actions/postsActions';
import { Link } from 'react-router';

class CatalogPage extends Component {
    componentDidMount() {
        this.props.getPostsData(wp, CONFIG.PRODUCTS_CATEGORY_ID);
    }
    render() {
        //const adminData = this.props.admin ? this.props.admin.data : null;
        //const adminSettings = this.props.admin ? this.props.admin.settings : null;
        //const posts = this.props.posts ? this.props.posts.data : null;
        return (
            <div className="App">
                <header className="App-header">
                    {/*<img src="http://deckline/wp-content/uploads/2018/02/css_background.png" className="App-logo" alt="logo" />*/}
                    <h1 className="App-title">Catalog page</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to='/about'>ABOUT LINK</Link>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostsData: (wp, categoryId) => {
            dispatch(
                getPostsData(wp, categoryId)
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
