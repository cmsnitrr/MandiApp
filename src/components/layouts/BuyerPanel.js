import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class BuyerPanel extends Component {
    render() {
        return (
            <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">      
                <div id="main-menu" class="main-menu collapse navbar-collapse">
                            <ul class="nav navbar-nav">
                            <li>
                            <img class="align-self-center rounded-circle mr-3" width="25px" height="25px" alt="" src={"https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"} />
                            {localStorage.getItem("ownerName")} <hr/>  
                        </li>
                        <li class="active">
                            <Link active to="/home"><i class="menu-icon fa fa-laptop"></i>Consignments </Link>    
                        </li>
                        <li>
                        <Link to="/product"><i class="menu-icon fa fa-laptop"></i>Tracking </Link>
                        </li>
                        <li>
                            <a href="widgets.html"> <i class="menu-icon ti-email"></i>Employee Accounts </a>
                        </li>
                        
                    </ul>
              </div>
            </nav>
        </aside>
            
        )
    }
}
export default BuyerPanel