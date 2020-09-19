import React, { Component } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { connect } from 'react-redux';
import { getUsers } from './../../actions/UserActions';
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';
const columns = [
  {
    name: 'First Name',
    selector: 'first_name',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'last_name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Action',
    selector: 'id',
    right: true,
    grow:3,
    cell: row => (
    <span><button type="button" class="btn btn-info btn-sm">Edit</button>&nbsp;
    <button type="button" class="btn btn-warning btn-sm">Permissions</button>&nbsp;
     <button type="button" class="btn btn-success btn-sm">Active</button>&nbsp;
    <Link to={`/updateUser/${row.id}`}><button type="button" class="btn btn-danger btn-sm">Delete</button></Link>
    </span>),
  },
];

  const FilterComponent = () => (
  <>
   <input type="text" name="searchField" id="search"  placeholder="Search"   class="form-control"/><br/><br/>
  </>
);

class UserList extends Component {
  constructor(props){
    super(props);
    this.state= {
      loading: false,
      perPage: 10,
    }
    
  }
componentDidMount() {
    const { perPage } = this.state;
    const page=1;
    this.setState({ loading: true });
    this.props.getUsers(page,perPage)
    this.setState({
      loading: false,
      searchField:""
    });
   
  };


  handlePageChange = async page => {
    const { perPage } = this.state;

    this.setState({ loading: true });

    this.props.getUsers(page,perPage);

    this.setState({
      loading: false
    });
  };

  handlePerRowsChange = async (perPage, page) => {
    this.setState({ loading: true });
    this.props.getUsers(page,perPage);

    this.setState({
      loading: false,
      perPage
    });
  };


  render() {
    const {  users, totalUsers } = this.props;
    const{ loading }=this.state.loading

    return (
             <div class="content">

    <div class="row">
    <FilterComponent/>
      <DataTable
        title="Users"
        columns={columns}
        data={users}
        Clicked
        selectableRows
        progressPending={loading}
        defaultSortField="first_name"
       fixedHeaderScrollHeight
       onSelectedRowsChange={this.updateState}
        pagination
        paginationServer
        paginationTotalRows={totalUsers}
        onChangeRowsPerPage={this.handlePerRowsChange}
        onChangePage={this.handlePageChange}
        
      />
      </div></div>
    );
  }
}

const mapStateToProps=state=>({
  users:state.userReducer.users,
  totalUsers:state.userReducer.totalUsers
})
export default connect(
  mapStateToProps,
  {getUsers})
  (UserList);