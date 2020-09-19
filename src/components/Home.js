import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Home extends Component {
    
    render() {
        return (
            <div>
           
            <div class="breadcrumbs">
            <div class="breadcrumbs-inner">
                <div class="row m-0">
                    <div class="col-sm-4">
                        <div class="page-header float-left">
                            <div class="page-title">
                                <h1>Home Page <span class="badge badge-success">20</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="page-header float-right">
                            <div class="page-title">
                                <ol class="breadcrumb text-right">
                                    <li> <Link to="/addproduct"><button type="button" class="btn btn-primary"> Add Product &nbsp;<i class="fa fa-plus"></i></button>&nbsp;</Link>
                                    <Link to="/addcategory"> <button type="button" class="btn btn-info"> Add Category &nbsp;<i class="fa fa-plus"></i></button></Link></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="animated fadeIn">
                <div class="buttons"> <h4 class="heading-title mb-1 mt-4 text-secondary">Category</h4>
                    <div class="row">
                       
                    <div class="col-md-3">
                        <aside class="profile-nav alt">
                            <section class="card">
                                <div class="card-header user-header alt cat-img">
                                    <div class="media">
                                       <div class="media-body">
                                            <h3 class="text-white">Category</h3>
                                            <p class="text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, laudantium explicabo autem molestias eaque, mollitia impedit, officia repudiandae culpa nemo veritatis quisquam</p>
                                        </div>
                                    </div>
                                </div>


                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                         <i class="fa fa-envelope-o"></i> Total Items <span class="badge badge-primary pull-right">10</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span>
                                    </li>

                                </ul>

                            </section>
                        </aside>
                    </div>
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top" src={"https://i.imgur.com/hrS2McC.png"} alt="Card image cap"/>
                            <div class="card-body">
                                <h4 class="card-title mb-3">Category name</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                         <i class="fa fa-envelope-o"></i> Total Items <span class="badge badge-primary pull-right">10</span>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="link"></a> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span>
                                    </li>

                                </ul>
                        </div>
                    </div>
                 </div>
                 <h4 class="heading-title mb-1 mt-4 text-secondary">Products</h4>
                 <div class="row">
                       <div class="col-md-3">
                           <aside class="profile-nav alt">
                               <section class="card">
                                   <div class="card-header user-header alt cat-img">
                                       <div class="media">
                                          <div class="media-body">
                                               <h3 class="text-white">Category</h3>
                                               <p class="text-white"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, laudantium explicabo autem molestias eaque, mollitia impedit, officia repudiandae culpa nemo veritatis quisquam</p>
                                           </div>
                                       </div>
                                   </div>
   
   
                                   <ul class="list-group list-group-flush">
                                       <li class="list-group-item">
                                            <i class="fa fa-envelope-o"></i> Total Items <span class="badge badge-primary pull-right">10</span>
                                       </li>
                                       <li class="list-group-item">
                                           <a href="link"></a> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span>
                                       </li>
   
                                   </ul>
   
                               </section>
                           </aside>
                       </div>
                       <div class="col-md-3">
                           <div class="card">
                               <img class="card-img-top" src={"https://i.imgur.com/hrS2McC.png"} alt="Card image cap"/>
                               <div class="card-body">
                                   <h4 class="card-title mb-3">Products</h4>
                                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               </div>
                               <ul class="list-group list-group-flush">
                                       <li class="list-group-item">
                                            <i class="fa fa-envelope-o"></i> Total Items <span class="badge badge-primary pull-right">10</span>
                                       </li>
                                       <li class="list-group-item">
                                           <a href="link"></a> <i class="fa fa-tasks"></i> Recent Activity <span class="badge badge-danger pull-right">15</span>
                                       </li>
   
                                   </ul>
                           </div>
                       </div>
                    </div>
                  
                
                </div> 
            </div>
        </div>
            <div class="clearfix"></div>
            </div>
            
        )
    }
}
export default Home