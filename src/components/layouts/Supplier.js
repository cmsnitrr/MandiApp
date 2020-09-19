import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect,Link,Switch} from 'react-router-dom';
import Home from '../Home';
import LeftPanel from './LeftPanel';
import Footer from './Footer';
import Header from './Header';
import Product from './../Product/Product';
import AddCategory from './../Category/AddCategory';
import AddProduct from './../Product/AddProduct';
import Myform from './../Product/Myform';
import MyComponentHook from './../User/MyComponentHook';
import UserList from './../User/UserList';
import AddUser from './../User/AddUser';
import SupplierPanel from './SupplierPanel';
import AddConsignment from './../Consignment/AddConsignment';
import Consignments from './../Consignment/Consignments';
class Supplier extends Component {
    constructor(props){
        super(props)
        this.logout=this.logout.bind(this);
        const token=localStorage.getItem("token")

        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            loggedIn
        }
    }
    logout(){
        localStorage.removeItem("token")
        this.setState({loggedIn:false})
        
    }
    
    render() {
        if(this.state.loggedIn==false){
            return (<Redirect to="/login"/>)
        }
        return (
            <Router>
               <SupplierPanel/>
                <div id="right-panel" class="right-panel">    
                <h1>Supplier Panel</h1>
                <Header logout={this.logout}/>
                    <Switch>
                        <Route exact path="/" component={Supplier} />
                        <Route exact path="/addConsignment" component={AddConsignment}/>
                        <Route exact path="/consigments" component={Consignments}/>

                        
                    </Switch>
                    <Footer/>
                </div>
            </Router>  
        )
    }
}

export default (Supplier);