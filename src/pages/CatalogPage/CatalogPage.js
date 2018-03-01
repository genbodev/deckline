import React, { Component } from 'react';

import './CatalogPage.css';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CatalogPage extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
