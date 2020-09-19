import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import Login from './components/Login/Login';

const Routing =() =>{
    return(
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Router>
        </Provider>
    )
}
export default Routing;