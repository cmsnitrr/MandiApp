import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCategory } from './../../actions/CategoryActions';

class AddCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            categoryName:"",
            categoryDescription:""

        }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const category = {
            categoryName:this.state.categoryName,
            categoryDescription:this.state.categoryDescription
        };
        
        this.props.createCategory(category, this.props.history);
      }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    render() {
        return (
            <div class="content">
            <div class="row m-0">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header"><strong>Category </strong><small> Details</small></div>
                    <div class="card-body card-block">
                         <form onSubmit={this.onSubmit}>
                        <div class="form-group"><label for="name" class=" form-control-label">Category Name</label>    
                        <input type="text" name="categoryName" id="categoryName" placeholder="Category name" value={this.state.categoryName}
                        onChange={this.onChange} class="form-control"/></div>
                        <div class="form-group"><label for="BrandName" class=" form-control-label">Description</label>
                        <input type="text" name="categoryDescription"  id="categoryDescription" placeholder="Brand name" value={this.state.categoryDescription}
                        onChange={this.onChange} class="form-control"/></div>
                         <br/>
                             <div class="form-actions form-group float-right">
                            <input type="submit" class="btn btn-success btn-sm" value="Add Category"/></div>
                 </form>
                 </div>
                </div>
            </div>
            <div class="col-md-4">
                    <div class="card bg-info">
                        <div class="card-body">
                            <blockquote class="blockquote mb-0 text-light">
                                <h3 class="text-light"> {this.state.categoryName==""?"Category name":this.state.categoryName}
                                </h3>    
                            <hr/>
                                    <p class=" text-light">{this.state.categoryDescription==""?"Category description entere upto 100 character for more best user experience":this.state.categoryDescription}</p>
                                <footer class="blockquote-footer text-light">  Sub-Category <span class="badge badge-primary ">2</span> &nbsp;&nbsp;&nbsp;            Products <span class="badge badge-warning  ">10</span>
                                <hr/><span ><button type="button" class="btn btn-secondary btn-sm pull-right"><i class="fa fa-magic"></i>&nbsp; View</button>
                                </span>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
         </div>
            </div>
            </div>
               
          );
    }
}
export default connect(null,{createCategory})(AddCategory);

