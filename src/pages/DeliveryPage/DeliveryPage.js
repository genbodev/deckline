import React, { Component, Fragment } from 'react';

import './DeliveryPage.css';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';
/*import cooperationImage from './partnerka.jpg';*/

function drawSticky(stickyComponent) {
    return (
        <Sticky>
            {
                ({
                     style,

                     // the following are also available but unused in this example
                     isSticky,
                     wasSticky,
                     distanceFromTop,
                     distanceFromBottom,
                     calculatedHeight
                 }) => {
                    return (
                        <div style={style} className={isSticky ? 'sticky' : 'sticky-default'}>
                            {stickyComponent}
                        </div>
                    )
                }
            }
        </Sticky>);
}

class DeliveryPage extends Component {
    render() {
        return (
            <div id="DeliveryPage">
                <TopPanelComponent/>
                <StickyContainer>
                    {drawSticky(<MainNavigation/>)}
                    <MobileNavigation/>
                    <Fragment>
                        <div className="cooperation-description">
                            <Grid>
                                <Row>
                                    <Col xs={12}>
                                        <h1>Доставка</h1>
                                        <p>
                                            Мы ценим каждого клиента и берем на себя обязательства по осуществлению своевременной и бережной доставки продукции по городу, области, РФ и СНГ. Мы гарантируем, что доставляемые товары сохранят свой товарный вид в процессе транспортировки и не будут повреждены в процессе погрузки или разгрузки.
                                        </p>
                                        <p>
                                            Перед погрузкой все изделия упаковываются, что предохраняет террасную доску от загрязнения при транспортировке. Все машины оснащены поддонами, которые предохраняют материалы от повреждения при загрузке и перевозке.
                                        </p>
                                        <div>
                                            <div>{/*<img src={cooperationImage} alt="cooperation-image" className="img-responsive"/>*/}</div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>

                    </Fragment>
                </StickyContainer>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPage);
