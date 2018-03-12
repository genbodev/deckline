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
                {title: 'Термо доска', slug: '/thermo-board'},
                {title: 'Сотруднечество', slug: '/cooperation'},
                {title: 'Каталог', slug: '/catalog'},
            ],
            mainMenuRefs: [
                {title: 'О нас', slug: '/about'},
                {title: 'Инструкции', slug: '/instructions'},
                {title: 'Статьи', slug: '/posts'},
                {title: 'Производство', slug: '/production'}
            ]
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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
                                <Button className="btn-navigation" onClick={() => this.handleShow()}><i className="fas fa-bars"></i></Button>
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
                                        <li key={key}><Link to={item.slug} activeClassName="active"><i className="fa fa-th" aria-hidden="true"></i>&nbsp;{item.title}</Link></li>
                                    ))}
                                </ul>
                            </nav>
                            <h4>Полезные ссылки</h4>
                            <nav className="navbar">
                                <ul className="nav">
                                    {this.state.mainMenuRefs.map((item, key) => (
                                        <li key={key}><Link to={item.slug} activeClassName="active"><i className="fas fa-link"></i>&nbsp;{item.title}</Link></li>
                                    ))}
                                </ul>
                            </nav>
                        </Modal.Body>
                        <Modal.Footer>
                            <h4>Контакты</h4>
                            <p className="contacts-p">
                                <i className="fas fa-envelope"></i>&nbsp;<span>user@gmail.com</span>
                            </p>
                            <p className="contacts-p">
                                <i className="fas fa-phone"></i>&nbsp;<span>8 800 1000 575</span>
                            </p>
                        </Modal.Footer>
                    </Modal>
                </div>
            </Clearfix>
        );
    }

}

export default MobileNavigation;