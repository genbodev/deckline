import React, { Component } from 'react';

import './PostsPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function createMarkup(html) {
    return {__html: html};
}

class PostsPage extends Component {
    componentDidMount() {

    }
    render() {

        if (true) {
            return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Posts Page</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
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
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
