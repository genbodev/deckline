import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col, Row, Grid, DropdownButton, MenuItem, Button, Clearfix } from 'react-bootstrap';

import './TopPanelComponent.css';

class TopPanelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topMenuTitle: 'Полезные ссылки',
            topMenuItems: [
                {title: 'О нас', slug: '/about'},
                {title: 'Инструкции', slug: '/instructions'},
                {title: 'Статьи', slug: '/posts'},
                {title: 'Производство', slug: '/production'}
            ],
            contactsTitle: 'Контакты',
            phone: '8 800 1000 575'
        };
    }

    render() {
        const {topMenuTitle, topMenuItems, contactsTitle, phone} = this.state;
        return (
            <Clearfix visibleMdBlock visibleLgBlock>
                <div id="TopPanelComponent" className="TopPanelComponent">
                    <div className="header-wrapper">
                        <Grid>
                            <Row className="show-grid">
                                <Col mdOffset={4} md={8}>
                                    <div className="top-panel">
                                        <DropdownButton
                                            id="menu-dropdown"
                                            title={<span><i
                                                className="fas fa-angle-right"></i>&nbsp;{topMenuTitle}</span>}
                                        >
                                            {topMenuItems.map((item, key) => (
                                                <MenuItem key={key} eventKey={key}
                                                          href={item.slug}><i className="fas fa-angle-right"></i>&nbsp;{item.title}</MenuItem>))}
                                        </DropdownButton>
                                        <Button bsStyle="link"><Link to='/contacts'><i
                                            className="fas fa-angle-right"></i>&nbsp;{contactsTitle}</Link></Button>
                                        <span className="phone"><i className="fas fa-phone"></i>&nbsp;<span>{phone}</span></span>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </Clearfix>
        );
    }

}

export default TopPanelComponent;