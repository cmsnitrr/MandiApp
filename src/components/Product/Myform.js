import React from "react";
import { useForm } from "react-hook-form";

export default function Myform() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example")); 

  return (
    <div class="content">
    <div class="row m-0">
    <div class="col-lg-9">
        <div class="card">
            <div class="card-header"><strong>Product </strong><small> Details</small></div>
            <div class="card-body card-block">
                 <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group"><label for="name" class=" form-control-label">Product Name</label>    
                <input type="text" name="name" ref={register} id="name" placeholder="Product name" class="form-control"/></div>
                <div class="form-group"><label for="brandname" class=" form-control-label">Brand Name</label>
                <input type="text" id="brandname" placeholder="Brand name " class="form-control"/></div>
                <div class="form-group"><label for="description" class=" form-control-label">Product Description</label>
                <input type="text" name="description" ref={register} id="description" placeholder="Enter description" class="form-control"/></div>
                <br/>
               <strong>Stock Details </strong> <small> (optional)</small><hr/>
               <div class="row form-group">
                    <div class="col-6">
                        <div class="form-group"><label for="city" class=" form-control-label">Unit Price</label>
                        <input type="text" name="Unit"  ref={register} id="Unit" placeholder="Enter unit Price" class="form-control"/>
                        </div>
                        {/* <label class="switch switch-text switch-info">
                            <input type="checkbox" class="switch-input" /> 
                            <span data-on="On" data-off="Off" class="switch-label"> Tax Included</span> <span class="switch-handle"></span>
                        </label> */}
                    </div>
                    <div class="col-6">
                        <div class="form-group"><label for="postal-code" class=" form-control-label">Measuring Unit</label>
                        <input type="text" name="Measuring"  ref={register} id="Measuring" placeholder="Measuring Unit" class="form-control"/></div>
                    </div>
                </div>
                
              
                <div class="form-group"><label for="Stock Amount" class=" form-control-label">Number of units</label>
                <input type="text" name="description1"  ref={register} id="description" placeholder="Enter Total units you have" class="form-control"/></div>
                
               <div class="form-group"><label for="Tax" class=" form-control-label">Tax on product</label>
               <input type="text"  name="gst"  ref={register} id="gst" placeholder="GST@5%" class="form-control"/></div>
                <div class="form-actions form-group float-right">
                    <input type="submit" class="btn btn-success btn-sm" value="submit"/></div>
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
                                   <h4 class="text-muted  font-weight-bold">Product Name </h4>
                                   <h6>Brand Name</h6>
                                </div>
                                <div class="stat-content float-right">
                                    <div class="text-left dib">
                                        <div class="stat-text">$<span>30/-</span></div>
                                        <div class="stat-heading">Unit</div>
                                    </div>
                                </div>
                            </div>
                            <div class="stat-heading pdd">This is description add only 100 character for better view.</div>
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