import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftPanel from './components/layouts/LeftPanel';
import Header from './components/layouts/Header';

import Home from './components/Home';
import {BrowserRouter as Router, Route,Link,Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/layouts/Dashboard';
import Login from './components/Login/Login';
import Buyer from './components/layouts/Buyer';
import Supplier from './components/layouts/Supplier';

function App() {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Switch>
   <Route exact path="/login" component={Login} />
   <Route exact path="/" component={Dashboard} />
   <Route exact path="/buyer" component={Buyer}/>
   <Route exact path="/supplier" component={Supplier} />
   <Route exact path="/addConsignment" component={Supplier} />
   <Route exact path="/home" component={Dashboard} />
   <Route exact path="/product" component={Dashboard} />
   <Route exact path="/addproduct" component={Dashboard} />
   <Route exact path="/addcategory" component={Dashboard} />
   <Route exact path="/MyComponentHook" component={Dashboard} />
   <Route exact path="/UserList" component={Dashboard} />
   <Route exact path="/createUser" component={Dashboard} />
   </Switch> 
   </BrowserRouter>
    </Provider>
  );
}

export default App;
