import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';

import './AboutPage.css';
import { connect } from 'react-redux';
import { StickyContainer } from 'react-sticky';
import { drawSticky } from '../../functions';
import TopPanelComponent from '../../components/TopPanelComponent/TopPanelComponent';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import Footer from '../../components/FooterComponent/FooterComponent';
import { Grid, Row, Col, Button } from 'react-bootstrap';

//import deliveryImage from './dostavka.jpg';

class AboutPage extends Component {
    render() {
        return (
            <div id="AboutPage" className="wrapper">
                <div className="content">
                    <TopPanelComponent/>
                    <StickyContainer>
                        {drawSticky(<MainNavigation/>)}
                        <MobileNavigation/>
                        <Fragment>
                            <div className="about-advantages">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h1>Компания DECKLINE это качество, инновации и успех</h1>
                                            <p className="about-advantages-lead">
                                                В настоящее время DECKLINE – успешная компания. Этот успех мы
                                                заслужили своим трудом, ответственностью, инновационным подходом. Мы
                                                продолжаем свое развитие и готовы к новым достижениям..
                                            </p>
                                            <Button href="/contacts" bsStyle="success">Присоединяйся к нам!</Button>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <hr/>
                            <div className="about-description">
                                <Grid>
                                    <Row>
                                        <Col sm={8}>
                                            <h3 className="header-accent">Кто <strong>мы</strong></h3>
                                            <p>
                                                Неоднократно испытав на себе все муки ремонта, который из-за
                                                недолговечности строительных материалов повторялся вновь и вновь,
                                                возникла идея о поиске инновационного материала, способного облегчить
                                                ремонт и строительство для наших будущих клиентов. Это должен был быть
                                                не просто современный красивый материал, но качественный и долговечный.
                                                Именно поэтому наше внимание привлек такой материал как <Link
                                                to="/terrace-board">ДПК</Link> (древесно-полимерный композит). Изучив все свойства и
                                                характеристики
                                                данного материала, было принято решение о запуске собственного
                                                производства. В то время в России о таком материале знали лишь единицы,
                                                хотя за рубежом уже активно заменяли традиционные материалы изделиями из
                                                древесно-полимерного композита.
                                            </p>
                                            <p>
                                                Для поддержания лидирующих позиции мы постоянно модернизируем наше
                                                производство, следим за качеством продукции и повышаем его, расширяем
                                                ассортимент товаров и улучшаем качество сервиса для наших клиентов. К
                                                примеру, в 2014 году была увеличена производственная мощность каждого
                                                станка за счет улучшенной системы охлаждения, а в 2016 году мы начали
                                                разработку состава ДПК с пониженной степенью горючести. Для удобства
                                                ввели единый центр обработки звонков и номер <strong>8-800</strong> для
                                                бесплатных
                                                звонков со всей России. Для более качественной работы за каждым
                                                клиентом, партнером теперь закрепляется менеджер.
                                            </p>
                                        </Col>
                                        <Col sm={4}>
                                            <h1>ЗДЕСЬ БУДЕТ ГАЛЕРЕЯ</h1>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                            <div className="about-history">
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <h3 className="header-accent">Наша <strong>история</strong></h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2016">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2016</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В начале 2016 года DECKLINE
                                                                GROUP запускает вторую линию, на этот раз по
                                                                производству
                                                                СИСТЕМ ОГРАЖДЕНИЯ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2015">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2015</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В начале 2015 года компания
                                                                начинает производить комплектующие для ДПК в России. К
                                                                середине 2015 года компания занимает одну из лидирующих
                                                                позиций по представлению ДПК стабильного качества и
                                                                большого
                                                                ассортимента в Москве и Московской области. В этом же
                                                                году
                                                                компания принимает решение о частичном перемещении
                                                                производственных мощностей в Россию. К концу 2015 года
                                                                DECKLINE GROUP на базе собственной производственной
                                                                площадки
                                                                по переработке пиломатериалов в Иркутской области
                                                                устанавливает линию по производству ТЕРРАСНЫХ СИСТЕМ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2014">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2014</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В 2014 году количество дилеров увеличивается вдвое. Наша
                                                                компания является единственным производителем на рынке ДПК,
                                                                кто изготавливает ограждения с нанесением текстуры дерева. В
                                                                этом же году происходит открытие официального
                                                                представительства в Москве.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2012">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2012</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В 2012-2013 годах компания
                                                                насчитывает около 30 дилеров в России, Казахстане и
                                                                Белоруссии.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2011">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2011</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В 2011 году DECKLINE GROUP
                                                                освоила поставки и реализацию материала на российский рынок.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2010">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2010</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В 2010 году производственные
                                                                мощности были увеличены и компания вышла на второй уровень с
                                                                собственным профилем СИСТЕМЫ ОГРАЖДЕНИЯ И ЗАБОРЫ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2009">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2009</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                В 2009 году компания DECKLINE
                                                                GROUP запустила собственное производство в Китае. На первом
                                                                этапе было успешно освоено производство профилей ТЕРРАСНОЙ
                                                                СИСТЕМЫ.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about-history-date-text-image-wrapper">
                                                <div className="about-history-date-text-image-border">
                                                    <div className="about-history-image about-history-image-2008">
                                                    </div>
                                                </div>
                                                <div className="about-history-date-text-wrapper">
                                                    <div className="about-history-date-text-border">
                                                        <div className="about-history-date">2008</div>
                                                        <div className="about-history-text">
                                                            <p>
                                                                История компании начинается
                                                                с 2008 года. Именно в этот год произошла первая встреча
                                                                инициативной группы инвесторов. Темой обсуждения стало
                                                                производство инновационного строительного материала –
                                                                древесно – полимерного композита (ДПК). После этого был
                                                                подписан договор совместного сотрудничества. Основной
                                                                поставщик оборудования – Австрия. Местом расположения
                                                                производственных мощностей был выбран – Китай.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
