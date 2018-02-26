import React, { Component } from 'react';
import { Col, Row, Grid, DropdownButton, MenuItem, Button, Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import './HeaderComponent.css';
import { connect } from 'react-redux';

class HeaderComponent extends Component {
    render() {
        return (
            <div id="HeaderComponent" className="HeaderComponent">
                <div className="header-wrapper">
                    <Grid>
                        <Row className="show-grid">
                            <Col mdOffset={6} md={6}>
                                <div className="top-panel">
                                    <DropdownButton
                                        id="menu-dropdown"
                                        title="Меню"
                                    >
                                        <MenuItem eventKey="1" active>Action</MenuItem>
                                        <MenuItem eventKey="2">Another action</MenuItem>
                                        <MenuItem eventKey="3">
                                            Active Item
                                        </MenuItem>
                                        <MenuItem divider/>
                                        <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>
                                    <Button bsStyle="link">Контакты</Button>
                                    <span><i className="fas fa-phone"></i>&nbsp;<span>8 800 1000 575</span></span>
                                </div>
                            </Col>
                        </Row>
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#home"><img src="../../../public/logo-single-green.png" width={120} alt=""/></a>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Nav>
                                <NavItem eventKey={1} href="#">
                                    Link
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Link
                                </NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar>
                    </Grid>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);