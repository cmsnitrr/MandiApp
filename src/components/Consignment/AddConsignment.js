import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createConsignment } from './../../actions/ConsignmentActions';

class AddConsignment extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"", 
            Material:"",                      
            ReceiverId:"",
            qualtity:"",
            location:"",
            address:"",
            shippingMark:"",
            lorryNo:"",
            emptyWeight:"",
            locatedWeight:"",
            NetWeight:"",
            FreightRate:"",
            DriverNo:"",
            TransporterName:"",
            status:"",
            description:""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        const consignment = {
            name:this.state.name,  
            Material:this.state.Material,                     
            ReceiverId:this.state.ReceiverId,
            qualtity:this.state.qualtity,
            location:this.state.location,
            address:this.state.address,
            shippingMark:this.state.shippingMark,
            lorryNo:this.state.lorryNo,
            emptyWeight:this.state.emptyWeight,
            locatedWeight:this.state.locatedWeight,
            NetWeight:this.state.NetWeight,
            FreightRate:this.state.FreightRate,
            DriverNo:this.state.DriverNo,
            TransporterName:this.state.TransporterName,
            status:this.state.status,
            description:this.state.description,
            token:localStorage.getItem("token"),
            userid:localStorage.getItem("id")

        };
        console.log(`cons object ${consignment.token}`)
        
        this.props.createConsignment(consignment, this.props.history);
      }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    render() {
        return (
            <div class="content">
              <div class="animated fadeIn">
            <div class="row m-0">
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header"><strong>Add </strong><small> Consignment</small></div>
                    <div class="card-body card-block">
                         <form onSubmit={this.onSubmit}>
   <div class="form-group"><label for="company" class=" form-control-label">Consignment name</label><input type="text" id="name" name="name" placeholder="Consignment name" class="form-control" value={this.state.name} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="vat" class=" form-control-label">ReceiverId</label><input type="text" id="ReceiverId" name="ReceiverId" placeholder="ReceiverId" class="form-control" value={this.state.ReceiverId} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="street" class=" form-control-label">Material</label><input type="text" id="Material" name="Material" placeholder="Enter Material" class="form-control" value={this.state.Material} onChange={this.onChange}/ ></div>
                                <div class="form-group"><label for="country" class=" form-control-label">Qualtity</label><input type="text" id="qualtity" name="qualtity" placeholder="qualtity" class="form-control" value={this.state.qualtity} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">location</label><input type="text" id="location" name="location" placeholder="location" class="form-control" value={this.state.location} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">address</label><input type="text" id="address" name="address" placeholder="address" class="form-control"value={this.state.address} onChange={this.onChange} /></div>
                                <div class="form-group"><label for="country" class=" form-control-label">shippingMark</label><input type="text" id="shippingMark" name="shippingMark" placeholder="shippingMark" class="form-control" value={this.state.shippingMark} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">lorryNo</label><input type="text" id="lorryNo" name="lorryNo" placeholder="lorryNo" class="form-control" value={this.state.lorryNo} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">emptyWeight</label><input type="text" id="emptyWeight" name="emptyWeight" placeholder="emptyWeight" class="form-control"value={this.state.emptyWeight} onChange={this.onChange} /></div>
                                <div class="form-group"><label for="country" class=" form-control-label">locatedWeight</label><input type="text" id="locatedWeight" name="locatedWeight" placeholder="locatedWeight" class="form-control" value={this.state.locatedWeight} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">NetWeight</label><input type="text" id="NetWeight" name="NetWeight" placeholder="NetWeight" class="form-control" value={this.state.NetWeight} onChange={this.onChange} /></div>
                                <div class="form-group"><label for="country" class=" form-control-label">FreightRate</label><input type="text" id="FreightRate" name="FreightRate" placeholder="FreightRate" class="form-control" value={this.state.FreightRate} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">DriverNo</label><input type="text" id="DriverNo" name="DriverNo" placeholder="DriverNo" class="form-control" value={this.state.DriverNo} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">TransporterName</label><input type="text" id="TransporterName" name="TransporterName" placeholder="TransporterName" class="form-control" value={this.state.TransporterName} onChange={this.onChange}/></div>
                                <div class="form-group"><label for="country" class=" form-control-label">Status</label><input type="text" id="status" name="status" placeholder="status" class="form-control" value={this.state.status} onChange={this.onChange} /></div>
                                <div class="form-group"><label for="country" class=" form-control-label">description</label><input type="text" id="description" name="description" placeholder="description" class="form-control" value={this.state.description} onChange={this.onChange} /></div>
                           
                        <div class="form-actions form-group float-right">
                            <input type="submit"  class="btn btn-success btn-sm" value="submit"/></div>
                 </form>
                 </div>
                </div>
            </div>

            </div>
            </div>
            </div>
               
          );
    }
}
export default connect(null,{createConsignment})(AddConsignment);