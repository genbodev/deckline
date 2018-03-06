import React, { Component } from 'react';
import { Link } from 'react-router';
import { Clearfix, Button, Modal } from 'react-bootstrap';

import './MainNavigation.css';

import logo from './logo-single-green.png';

class MainNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainMenuItems: [
                {title: 'Главная', slug: '/'},
                {title: 'Террасная доска', slug: '/terrace-board'},
                {title: 'Термо доска', slug: '/thermo-board'},
                {title: 'Сотруднечество', slug: '/cooperation'},
                {title: 'Каталог', slug: '/catalog'},
            ],
            show: false
        };
    }

    render() {
        return (
            <Clearfix visibleMdBlock visibleLgBlock>
                <div id="MainNavigationComponent" className="MainNavigationComponent">
                    <div className="main-navigation-wrapper">
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="/"><img src={logo} alt="deckline-logo"/></Link>
                                </div>
                                <ul className="nav navbar-nav navbar-right">
                                    {this.state.mainMenuItems.map((item, key) => (
                                        <li key={key}><Link activeClassName="active" to={item.slug}>{item.title}</Link>
                                        </li>))}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </Clearfix>
        );
    }

}

export default MainNavigation;