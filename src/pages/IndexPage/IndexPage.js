import React, { Component } from 'react';

import './IndexPage.css';
import { connect } from 'react-redux';
import wp from '../../index';
import CONFIG from '../../config';

import { getPagesData } from "../../actions/pagesActions";

function createMarkup(html) {
    return {__html: html};
}

class IndexPage extends Component {
    componentDidMount() {
        this.props.getPagesData(wp, CONFIG.INDEX_PAGE_ID);
    }
    render() {

        //const adminData = this.props.admin ? this.props.admin.data : null;
        //const adminSettings = this.props.admin ? this.props.admin.settings : null;
        const pagesData = this.props.pages ? this.props.pages.data : null;

        if (pagesData) {
            return (
                <div id="IndexPage" className="App">
                    <header className="App-header">
                        <h1 className="Page-title">Title</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(pagesData.content.rendered)}/>
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
        pages: state.pages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPagesData: (wp, pageId) => {
            dispatch(
                getPagesData(wp, pageId)
            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
