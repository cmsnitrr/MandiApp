import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class LeftPanel extends Component {
    render() {
        return (
            <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">      
                <div id="main-menu" class="main-menu collapse navbar-collapse">
                            <ul class="nav navbar-nav">
                            <li>
                            <img class="align-self-center rounded-circle mr-3" width="25px" height="25px" alt="" src={"https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"} />
                            Keshav Kumar   <hr/>  
                        </li>
                        <li class="active">
                            <Link active to="/home"><i class="menu-icon fa fa-laptop"></i>Dashboard </Link>    
                        </li>
                        <li>
                        <Link to="/product"><i class="menu-icon fa fa-laptop"></i>Products </Link>
                        </li>
                        <li>
                            <a href="widgets.html"> <i class="menu-icon ti-email"></i>Employee Accounts </a>
                        </li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-bar-chart"></i>Managerment</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="menu-icon fa fa-line-chart"></i><a href="charts-chartjs.html">Customers</a></li>
                                <li><i class="menu-icon fa fa-area-chart"></i><a href="charts-flot.html">Suppliers</a></li>
                                <li><i class="menu-icon fa fa-pie-chart"></i><a href="charts-peity.html">Stock Transfer</a></li>
                            </ul>
                        </li>
    
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-area-chart"></i>Orders</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="menu-icon fa fa-map-o"></i><a href="maps-gmap.html">Sales order</a></li>
                                <li><i class="menu-icon fa fa-street-view"></i><a href="maps-vector.html">Purchase Order</a></li>
                            </ul>
                        </li>
                        <li class="menu-title">Extras</li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-plus"></i>User</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><i class="menu-icon fa fa-user"></i><Link to="/createUser">Create User</Link></li>
                                <li><i class="menu-icon fa fa-user"></i><Link to="/userList">Users</Link></li>
                                <li><i class="menu-icon fa fa-star"></i><a href="/subscrption">Subsciption</a></li>
                                <li><i class="menu-icon fa fa-sign-out"></i><a href="/logout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
              </div>
            </nav>
        </aside>
            
        )
    }
}
export default LeftPanel