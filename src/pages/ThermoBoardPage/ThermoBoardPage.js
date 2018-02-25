import React, { Component } from 'react';

import './ThermoBoardPage.css';
import { connect } from 'react-redux';

class ThermoBoardPage extends Component {
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
        setName: (name) => {
            dispatch(

            )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ThermoBoardPage);
