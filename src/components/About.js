import React, { Component } from 'react';

import { connect } from 'react-redux';

class About extends Component {
    render() {
        return (
            <div className="">
                <h1>About</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
