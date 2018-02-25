import React, { Component } from 'react';

import './PostsPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import wp from '../../index';
import CONFIG from '../../config';
import { getPostsData } from "../../actions/postsActions";

function createMarkup(html) {
    return {__html: html};
}

class PostsPage extends Component {
    componentDidMount() {
        this.props.getPostsData(wp, CONFIG.POSTS_CATEGORY_ID);
    }
    render() {
        const adminData = this.props.admin ? this.props.admin.data : null;
        const adminSettings = this.props.admin ? this.props.admin.settings : null;
        const posts = this.props.posts ? this.props.posts.data : null;

        if (adminData && adminSettings && posts) {
            console.log(posts);
            return (
                <div className="App">
                    <header className="App-header">
                        {/*<img src="http://deckline/wp-content/uploads/2018/02/css_background.png" className="App-logo" alt="logo" />*/}
                        <h1 className="App-title">{adminSettings.title}</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    {posts.map((post, key) => (<div key={key} dangerouslySetInnerHTML={createMarkup(post.content.rendered)}/>))}
                    <Link to='/about'>ABOUT LINK</Link>
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
        math: state.math,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
