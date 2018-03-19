import React, { Component, Fragment } from 'react';

import './DeliveryPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollTop from '../../components/ScrollTop/ScrollTop';

import DeliveryImage from './dostavka.jpg';
import DeliveryServiceImage1 from './logo-ratek.jpg';
import DeliveryServiceImage2 from './logo-vl-logistik.png';
import DeliveryServiceImage3 from './delovie_linii-250.jpg';

class DeliveryPage extends Component {
    render() {
        return (
            <div id="DeliveryPage" className="wrapper">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="delivery-description">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Доставка</h1>
                                            <p>
                                                Мы ценим каждого клиента и берем на себя обязательства по осуществлению
                                                своевременной и бережной доставки продукции по городу, области, РФ и
                                                СНГ. Мы гарантируем, что доставляемые товары сохранят свой товарный вид
                                                в процессе транспортировки и не будут повреждены в процессе погрузки или
                                                разгрузки.
                                            </p>
                                            <p>
                                                Перед погрузкой все изделия упаковываются, что предохраняет террасную
                                                доску от загрязнения при транспортировке. Все машины оснащены поддонами,
                                                которые предохраняют материалы от повреждения при загрузке и перевозке.
                                            </p>
                                            <div className="delivery-description-image">
                                                <img src={DeliveryImage} alt="delivery"
                                                     className="img-responsive"/>
                                            </div>
                                            <p>
                                                Оправка осуществляется с ближайшего регионального склада: Москва,
                                                Владивосток.
                                            </p>
                                            <p>
                                                В случае заказ крупной поставки или контейнера отправляем напрямую с
                                                производства под Иркутском.
                                            </p>
                                            <p className="delivery-description-footnote">
                                                *Стоимость доставки зависит от удаленности объекта заказчика от склада
                                                компании и от массы груза.
                                            </p>
                                            <p className="delivery-description-footnote">
                                                **Доставляем заказы во все регионы России при посредничестве
                                                транспортных компаний.
                                            </p>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="delivery-service">
                                <Grid>
                                    <Row>
                                        <Col sm={4}>
                                            <div className="delivery-service-image">
                                                <img src={DeliveryServiceImage1} alt="delivery-service-1"
                                                     className="img-responsive"/>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="delivery-service-image">
                                                <img src={DeliveryServiceImage2} alt="delivery-service-2"
                                                     className="img-responsive"/>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="delivery-service-image">
                                                <img src={DeliveryServiceImage3} alt="delivery-service-3"
                                                     className="img-responsive"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <ScrollTop/>
                        </Fragment>
                    </StickyContainer>
                </div>
                <div className="footer">
                    <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPage);
