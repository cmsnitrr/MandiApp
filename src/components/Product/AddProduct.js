import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProduct } from '../../actions/ProductActions';

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
            productName:"",                       
            description:"",
            brandName:"",
            measuringUnit:"",
            price:"",
            gst:"",
            noOfUnit:""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const product = {
            productName:this.state.productName,                       
            description:this.state.description,
            brandName:this.state.brandName,
            measuringUnit:this.state.measuringUnit,
            price:this.state.price,
            gst:this.state.gst,
            noOfUnit:this.state.noOfUnit
        };
        
        this.props.createProduct(product, this.props.history);
      }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    render() {
        return (
            <div class="content">
            <div class="row m-0">
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header"><strong>Product </strong><small> Details</small></div>
                    <div class="card-body card-block">
                         <form onSubmit={this.onSubmit}>
                        <div class="form-group"><label for="name" class=" form-control-label">Product Name</label>    
                        <input type="text" name="productName"  id="name" placeholder="Product name" value={this.state.productName}
                        onChange={this.onChange} class="form-control"/></div>
                        
                        <div class="form-group"><label for="BrandName" class=" form-control-label">Brand Name</label>
                        <input type="text" name="brandName"   id="BrandName" placeholder="Brand name" value={this.state.brandName}
                        onChange={this.onChange} class="form-control"/></div>
                       
                        <div class="form-group"><label for="ProductDescription" class=" form-control-label">Product Description</label>
                        <input type="text" name="description"  id="Description" placeholder="Enter description" value={this.state.description}
                        onChange={this.onChange} class="form-control"/></div>
                        
                        <br/>
                       <strong>Stock Details </strong> <small> (optional)</small><hr/>
                       <div class="row form-group">
                            <div class="col-6">
                                <div class="form-group"><label for="city" class=" form-control-label">Unit Price</label>
                                <input type="number" name="price"  id="Unit" placeholder="Enter unit Price" value={this.state.price}
                                onChange={this.onChange} class="form-control"/>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group"><label for="postal-code" class=" form-control-label">Measuring Unit</label>
                                <input type="text" name="measuringUnit"   id="Measuring" placeholder="Measuring Unit" value={this.state.measuringUnit}
                                onChange={this.onChange} class="form-control"/></div>
                            </div>
                        </div>
                        
                      
                        <div class="form-group"><label for="Stock Amount" class=" form-control-label">Number of units</label>
                        <input type="text" name="noOfUnit"  id="NoOfUnit" placeholder="Enter Total units you have" value={this.state.noOfUnit}
                        onChange={this.onChange} class="form-control"/></div>
                        
                       <div class="form-group"><label for="Tax" class=" form-control-label">Tax on product</label>
                       <input type="text"  name="gst"   id="gst" placeholder="GST@5%" value={this.state.gst}
                       onChange={this.onChange} class="form-control"/></div>
                        <div class="form-actions form-group float-right">
                            <input type="submit"  class="btn btn-success btn-sm" value="submit"/></div>
                 </form>
                 </div>
                </div>
            </div>
            <div class="col-lg-3">
                            <div class="card">
                                <img class="card-img-top" width="100%" height="150" src={"https://www.wilddesignz.com/image/cache/catalog/placeholderproduct-500x500.png"} alt="Card_sample_image"/>
                                <div class="card-body">
                                <div class="stat-widget-five">
                                        <div class="stat-icon dib float-left">
                                           <h4 class="text-muted  font-weight-bold">{this.state.productName==""?"Product Name":this.state.productName} </h4>
                                           <h6>{this.state.brandName==""?"Brand Name":this.state.brandName}</h6>
                                        </div>
                                        <div class="stat-content float-right">
                                            <div class="text-left dib">
                                                <div class="stat-text">$<span>30/-</span></div>
                                                <div class="stat-heading">{this.state.noOfUnit==""?"Brand Name":this.state.noOfUnit}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="stat-heading pdd">{this.state.description==""?"This is description add only 100 character for better view.":this.state.description}</div>
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
            </div>
            </div>
               
          );
    }
}
export default connect(null,{createProduct})(AddProduct);