import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CategoryItem from '../Category/CategoryItem';
import ProductItem from '../Product/ProductItem';
import { connect } from 'react-redux';
import { getProductDetails } from './../../actions/ProductActions';
class Product extends Component {
    
    componentDidMount(){
        const reqObject={
            "orgId":"ORGDX2GW1",
            "offset":1,
            "limit":-1,
            "catId":"SCAT001GSW2"

        }
       // var raw = JSON.stringify({"offset":1,"limit":-1,"catId":"SCAT001GSW2"});
        console.log("above api call")
        this.props.getProductDetails(reqObject)
        console.log("below api call")
       
    }
    render() {
        return (
            <div>
            
                <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1>Add New Product <span class="badge badge-success">20</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li> <Link to="/addproduct"><button type="button" class="btn btn-primary"> Add Product &nbsp;<i class="fa fa-plus"></i></button></Link>&nbsp;
                                    <Link to="/addcategory">   <button type="button" class="btn btn-info"> Add Category &nbsp;<i class="fa fa-plus"></i></button></Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div class="content">
        <h4 class="heading-title mb-1  text-secondary">Categories</h4>
            <hr/>
            <div class="row">

        
          </div>
          <h4 class="heading-title mb-1  text-secondary">Products</h4>
            <hr/>
          <div class="row">

  </div>
            <div class="clearfix"></div></div>
          </div>
        </div>
        )
    }
}
const mapStateToProps=state=>({
  // categories:state.productReducer.categories,
   products:state.productReducer.products
})
export default connect(mapStateToProps,{getProductDetails})(Product);