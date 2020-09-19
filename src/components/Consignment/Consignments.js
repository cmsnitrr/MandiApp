import React, { Component } from 'react'

class Consignments extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <h1>Consignments List</h1>
                <div class="col-md-3">
                        <div class="card">
                           
                            <div class="card-body">
                                <h4 class="card-title mb-3">Consignment name</h4>
                                <p class="card-text">Some quick example text content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                         <i class="fa fa-tasks"></i> Challan Num <span class=" pull-right">10</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DO No <span class=" pull-right">15</span>
                                    </li>
                                     <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> Receiver Name <span class="pull-right">Rohit Knsay</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> Status <span class=" pull-right">Dispatched</span>
                                    </li>
                                     <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DoNo <span class=" pull-right">15</span>
                                    </li>
                                     <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DoNo <span class=" pull-right">15</span>
                                    </li>
                                     <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DoNo <span class=" pull-right">15</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DoNo <span class=" pull-right">15</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> DoNo <span class=" pull-right">15</span>
                                    </li>

                                </ul>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Consignments;