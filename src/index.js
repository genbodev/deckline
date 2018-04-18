import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';

import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { getAdminData, getSettingsData } from './actions/adminActions';
import { getCategoriesData } from './actions/categoriesActions';
import { getPagesData } from './actions/pagesActions';
import { getPostsData } from './actions/postsActions';
import CONFIG from './config';

import IndexPage from './pages/IndexPage/IndexPage';
//import AboutPage from './pages/AboutPage/AboutPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
//import CooperationPage from './pages/CooperationPage/CooperationPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
//import InstructionsPage from './pages/InstructionsPage/InstructionsPage';
import PostsPage from './pages/PostsPage/PostsPage';
import ProductionPage from './pages/ProductionPage/ProductionPage';
import TerraceBoardPage from './pages/TerraceBoardPage/TerraceBoardPage';
import TerraceInstallationPage from './pages/TerraceInstallationPage/TerraceInstallationPage';
//import ThermoBoardPage from './pages/ThermoBoardPage/ThermoBoardPage';
import FencingSystemPage from './pages/FencingSystemPage/FencingSystemPage';

const history = syncHistoryWithStore(browserHistory, store);

const WP = require('wpapi');
const wp = new WP({
    endpoint: `${CONFIG.HOST}wp-json`,
    username: CONFIG.LOGIN,
    password: CONFIG.PASSWORD
});

wp.adminData = wp.registerRoute('wp/v2', '/redux-theme-options/');

store.dispatch(getSettingsData(wp));
store.dispatch(getAdminData(wp));
store.dispatch(getCategoriesData(wp));
store.dispatch(getPagesData(wp));
store.dispatch(getPostsData());

ReactDOM.render(
    <Provider store={store}>
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
            <Route path='/' component={IndexPage}/>
            {/*<Route path='/about' component={AboutPage}/>*/}
            <Route path='/catalog' component={CatalogPage}/>
            <Route path='/contacts' component={ContactsPage}/>
            {/*<Route path='/cooperation' component={CooperationPage}/>*/}
            <Route path='/delivery' component={DeliveryPage}/>
            {/*<Route path='/instructions' component={InstructionsPage}/>*/}
            <Route path='/posts' component={PostsPage}/>
            <Route path='/production' component={ProductionPage}/>
            <Route path='/terrace-board' component={TerraceBoardPage}/>
            <Route path='/terrace-installation' component={TerraceInstallationPage}/>
            <Route path='/fencing-system' component={FencingSystemPage}/>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();