import React, { Component } from 'react'
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import { loginUser } from './../../actions/LoginActions';
import { login } from './../../actions/LoginActions';
import PropTypes from "prop-types";
import classnames from "classnames";
class Login extends Component {
    constructor(props){
        super(props)
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        this.state={
            username:"",
            password:"",
            loggedIn,
            errors:{}
            
            
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({errors:nextProps.errors})    
      }
     
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        const user={
            username:this.state.username,
            password:this.state.password
        };
        this.props.login(user).then(
            (res)=>
                {
                    console.log("inside success")
                     localStorage.setItem("token",res.data.Authtoken)
                     localStorage.setItem("name",res.data.data.username)
                     localStorage.setItem("id",res.data.data.id)
                     localStorage.setItem("ownerName",res.data.data.ownerName)
                     localStorage.setItem("role",res.data.data.role)
                    
                     {this.setState({loggedIn:true})}
                }
            ,
            (err)=>{console.log(`error msg ${err}`)}
        );
    }
    render() {
        const {errors}=this.state;
        if(this.state.loggedIn && localStorage.getItem("role")==="1"){
            return( <Redirect to={{
                pathname: '/'
            }}
    />)
        }
        if(this.state.loggedIn && localStorage.getItem("role")==="2"){
            return( <Redirect to={{
                pathname: '/buyer'
            }}
    />)
        }
        if(this.state.loggedIn && localStorage.getItem("role")==="3"){
            return( <Redirect to={{
                pathname: '/supplier'
            }}
    />)
        }
        return (
            <div>
                <div class="sufee-login d-flex align-content-center flex-wrap">
                <div class="container">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="index.html">
                                <img class="align-content" src="images/logo.png" alt=""/>
                            </a>
                        </div>
                        <div class="login-form">
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <label>Username</label>
                                    <input type="text" required className={classnames("form-control",{"is-invalid":errors.message})} placeholder="User Id" name="username" value={this.state.username} onChange={this.onChange} />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" required className={classnames("form-control",{"is-invalid":errors.message})} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                                </div>
                               <h5><div className="text-danger">{errors.message}</div></h5>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"/> Remember Me/
                                    </label>
                                    <label class="pull-right">
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                <div class="social-login-content">
                                    <div class="social-button">
                                        <button type="button" class="btn social facebook btn-flat btn-addon mb-3"><i class="ti-facebook"></i>Sign in with facebook</button>
                                        <button type="button" class="btn social twitter btn-flat btn-addon mt-2"><i class="ti-twitter"></i>Sign in with twitter</button>
                                    </div>
                                </div>
                                <div class="register-link m-t-15 text-center">
                                    <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
            </div>
        )
    }
}
Login.propTypes={
    errors:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    errors: state.errors
  });
  
export default connect(
    mapStateToProps,
    { login }
  )(Login);
