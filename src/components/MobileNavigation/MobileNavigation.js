import React, { Component } from 'react';
import { Link } from 'react-router';
import { Clearfix, Button, Modal } from 'react-bootstrap';

import './MobileNavigation.css';

import logo from './logo-single-green.png';

class MobileNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            mainMenuItems: [
                {title: 'Главная', slug: '/'},
                {title: 'Террасная доска', slug: '/terrace-board'},
                {title: 'Система ограждений', slug: '/fencing-system'},
                {title: 'Производство', slug: '/production'},
                {title: 'Каталог', slug: '/catalog'},
            ]
        };
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        return (
            <Clearfix visibleXsBlock visibleSmBlock>
                <div id="MobileNavigationComponent" className="MobileNavigationComponent">
                    <div className="mobile-navigation-wrapper">
                        <nav className="navbar navbar-default navbar-fixed-top">
                            <div className="container">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="/"><img src={logo} alt="deckline-logo"/></Link>
                                </div>
                                <Button className="btn-navigation" onClick={() => this.handleShow()}><i
                                    className="fas fa-bars"></i></Button>
                            </div>
                        </nav>
                    </div>
                    <Modal id="mobile-menu-modal" show={this.state.show} onHide={() => this.handleClose()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Мобильное Меню</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <h4>Меню</h4>
                            <nav className="navbar">
                                <ul className="nav">
                                    {this.state.mainMenuItems.map((item, key) => (
                                        <li key={key}><Link to={item.slug} activeClassName="active"><i
                                            className="fa fa-th" aria-hidden="true"></i>&nbsp;{item.title}</Link></li>
                                    ))}
                                </ul>
                            </nav>
                            <h4>Контакты</h4>
                            <p className="contacts-p">
                                <i className="fas fa-envelope"></i>&nbsp;<span>user@gmail.com</span>
                            </p>
                            <p className="contacts-p">
                                <i className="fas fa-phone"></i>&nbsp;<span>(39543) 52953, 52952</span>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Clearfix>
        );
    }

}

export default MobileNavigation;