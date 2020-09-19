import React, { Component } from 'react'

class CategoryItem extends Component {
    render() {
        const {category}=this.props;
        return (
            <div class="col-md-3">
            <div class="card bg-info">
                <div class="card-body">
                <div class="corner-ribon black-ribon ">
               
                <a href="EditCategory"> <i class="fa fa-edit"></i></a> <a href="deleteCatgory"><i class="fa fa-times"></i></a>
                    </div>
                    <blockquote class="blockquote mb-0 text-light">
                    
                        <h4 class="text-light">{category.name}
                        </h4>    
                    <hr/>
                            <p class=" text-light">{category.description}</p>

                        <footer class="blockquote-footer text-light">  Sub-Category <span class="badge badge-primary ">2</span> &nbsp;&nbsp;&nbsp;            Products <span class="badge badge-warning  ">10</span>
                        <hr/><span ><button type="button" class="btn btn-secondary btn-sm pull-right"><i class="fa fa-magic"></i>&nbsp; View</button>
                        </span>
                        </footer>
                    </blockquote>
                </div>
            </div>
 </div>
            
        )
    }
}
export default CategoryItem;