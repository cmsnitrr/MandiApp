import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createUser } from './../../actions/UserActions';
class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:"",                       
            phoneNumber:"",
            dob:"",
            aadharNumber:"",
            gender:"",
            password:""

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        // const user = {
        //     userName:this.state.userName,                       
        //     phoneNumber:this.state.phoneNumber,
        //     dob:this.state.dob,
        //     aadharNumber:this.state.aadharNumber,
        //     gender:this.state.gender,
        //     password:this.state.password
        // };
        const user={
            "orgId":"ORGIDGVN2",
            "userType":"End User",
            "name":"KESHAV",
            "phoneNumber":"9896647535",
            "aadharNumber":"1325445758778089",
            "gender":"M",
            "PASSWORD":"bansal",
            "dob":"2020-07-23",
            "permission_code":"000",
            "name_hi":"name_hi",
            "image_url":"image_url"
            }            
        console.log("above api function")
        this.props.createUser(user, this.props.history);
        console.log("below api function")
      }
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    render() {
        return (
  <div class="content">
    <div class="row m-0">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-header"><strong>User </strong><small> Details</small></div>
            <div class="card-body card-block">
                 <form onSubmit={this.onSubmit}>
                <div class="form-group"><label for="name" class=" form-control-label">Name</label>    
                <input type="text" name="userName" value={this.state.userName} onChange={this.onChange} id="name" placeholder="Enter Full Name" class="form-control"/></div>
                <div class="form-group"><label for="phoneNumber" class=" form-control-label">Phone Number</label>
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange}   id="BrandName" placeholder="Phone Number" class="form-control"/></div>
                <div class="form-group"><label for="aadharNumber" class=" form-control-label">Aadhar Number</label>
                <input type="text" name="adharNumber"  value={this.state.adharNumber} onChange={this.onChange}   id="adharNumber" placeholder="Aadhar Card Number" class="form-control"/></div>
                <div class="form-group"><label for="userType" class=" form-control-label">Aadhar Number</label>
                <input type="text" name="userType"  value={this.state.userType} onChange={this.onChange}   id="userType" placeholder="Aadhar Number" class="form-control"/></div>
                <br/>
               <strong>More Details </strong> <small> (optional)</small><hr/>
               <div class="row form-group">
                    <div class="col-6">
                        <div class="form-group"><label for="dob" class="form-control-label">Date Of Birth</label>
                        <input type="Date" name="dob" value={this.state.dob} onChange={this.onChange}  id="Unit" placeholder="Your Date Of Birth" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group"><label for="gender" class=" form-control-label">Gender</label>
                        <input type="text" name="gender"  value={this.state.gender} onChange={this.onChange}   id="gender" placeholder="gender" class="form-control"/></div>
                    </div>
                </div>
                <div class="form-group"><label for="password" class=" form-control-label">Password</label>
                <input type="password" name="password"  value={this.state.password} onChange={this.onChange}   id="password" placeholder="Enter UserPassword" class="form-control"/></div>
                <div class="form-actions form-group float-right">
                    <input type="submit" class="btn btn-success btn-sm" value="submit"/></div>
         </form>
         </div>
        </div>
    </div>
    </div>
    </div>
          );
    }
}
export default connect(null,{createUser})(AddUser);