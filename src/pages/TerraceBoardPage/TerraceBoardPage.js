import React, { Component } from 'react';
import Header from '../../components/TopPanelComponent/TopPanelComponent';
import './TerraceBoardPage.css';
import { connect } from 'react-redux';

class TerraceBoardPage extends Component {
    render() {
        return (
            <div className="App">
                <h1>Terrace Board Page</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(TerraceBoardPage);
