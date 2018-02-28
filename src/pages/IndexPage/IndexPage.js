import React, { Component } from 'react';

import './IndexPage.css';
import { connect } from 'react-redux';
import wp from '../../index';
import CONFIG from '../../config';
import Header from '../../components/HeaderComponent/HeaderComponent';
import Footer from '../../components/FooterComponent/FooterComponent';

import { getPagesData } from '../../actions/pagesActions';



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
                    <Header/>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <div dangerouslySetInnerHTML={createMarkup(pagesData.content.rendered)}/>
                    <Footer/>
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
