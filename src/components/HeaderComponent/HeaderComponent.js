import React, { Component } from 'react';

import './HeaderComponent.css';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
    render() {
        return (
            <div id="HeaderComponent" className="HeaderComponent">

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);