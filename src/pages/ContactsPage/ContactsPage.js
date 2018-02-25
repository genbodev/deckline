import React, { Component } from 'react';

import './ContactsPage.css';
import { connect } from 'react-redux';

class ContactsPage extends Component {
    render() {
        return (
            <div className="App">

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
