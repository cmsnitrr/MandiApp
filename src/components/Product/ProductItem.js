import React, { Component } from 'react'

class ProductItem extends Component {
    render() {
        const {products}=this.props;
        return (
<div class="col-lg-3">
<div class="card">
<div class="corner-ribon black-ribon ">
               
               <a href="editproduct"> <i class="fa fa-edit"></i></a> <a href="deleteproduct"><i class="fa fa-times"></i></a>
                   </div>
    <img class="card-img-top" width="100%" height="150" src={products.image_url} alt="Card image cap"/>
    <div class="card-body">

    <div class="stat-widget-five">
            <div class="stat-icon dib float-left">
        <h4 class="text-muted  font-weight-bold">{products.name}</h4>
               <h6>{products.brandname}</h6>
            </div>
            <div class="stat-content float-right">
                <div class="text-left dib">
                    <div class="stat-text">$<span>30/-</span></div>
                    <div class="stat-heading">Unit</div>
                </div>
            </div>
        </div>
        <div class="stat-heading pdd">{products.description}</div>
        </div>
    <ul class="list-group list-group-flush">
            <li class="list-group-item">
                 <i class="fa fa-inbox"></i> Units in Stock <span class="badge badge-primary pull-right">10</span>
            </li>
            <li class="list-group-item">
                <a href="link"></a> <i class="fa fa-location-arrow"></i> Total sold <span class="badge badge-danger pull-right">15</span>
            </li>

        </ul>
</div>
</div>
        )
    }
}
export default ProductItem;