import React, { Component } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import axios from 'axios'
const data = [{ id: 1,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 2,name: 'Aonan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 3,name: 'Bonan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 4,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 5,name: 'Donan the Barbarian', title: 'Conan the Barbarian', year: '1982' ,active: '1'},
{ id: 6,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 7,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982' ,active: '0'},
{ id: 8,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '0' },
{ id: 9,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982' ,active: '1'},
{ id: 10,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 11,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 12,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982',active: '1' },
{ id: 13,name: 'Conan the Barbarian', title: 'Conan the Barbarian', year: '1982' ,active: '1'}];

const conditionalRowStyles = [
  {
    when: row => row.active == 1,
    style: row => ({
      backgroundColor: row.active ? 'pink' : 'inerit',
    }),
  },

];


const FilterComponent = () => (
  <>
   <input type="text" name="search" id="search"  placeholder="Search"   class="form-control"/><br/><br/>
  </>
);


const columns = [
  {
    name: 'Title',
    sortable: true,
    cell: row => (<div style={{color:'red'}}>{row.title}</div>),
  },
    {
    name: 'Name',
    selector: 'name',
    sortable: true,
    grow:1,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
  },
    {
    name: 'Action',
    selector: 'id',
    right: true,
    grow:4,
    cell: row => (
    <span><button type="button" class="btn btn-info btn-sm">Edit</button>&nbsp;
    <button type="button" class="btn btn-warning btn-sm">Permissions</button>&nbsp;
     <button type="button" class="btn btn-success btn-sm">Active</button>&nbsp;

    <button type="button" class="btn btn-danger btn-sm">Delete</button>
    </span>),
  },
];
const handleChange = (state) => {
  // You can use setState or dispatch with something like Redux so we can use the retrieved data
  console.log('Selected Rows: ', state.selectedRows);
};
// Toggle the state so React Table Table changes to `clearSelectedRows` are triggered
const handleClearRows = () => {
  this.setState({ toggledClearRows: !this.state.toggledClearRows})
}

// The row data is composed into your custom expandable component via the data prop
const ExpandableComponent = ({ data }) => <img src={data.image} />;

const updateState = state => {
    this.setState({ selectedRows: state.selectedRows }); // triggers MyComponent to re-render with new state
  }
class MyComponentHook extends Component {
      constructor(props){
        super(props);
        this.state={
          toggledClearRows: false ,
          search:"",
          data: [],
          loading: false,
          totalRows: 0,
          perPage: 10,
        }

    }
  render() {
     
      return (
          <div class="content">

    <div class="row">
              <FilterComponent/>
      <DataTable
        title="Registered User"
        columns={columns}
        data={data}
        Clicked
        selectableRows
        pagination 
        paginationPerPage={[20]}
        fixedHeaderScrollHeight
        
        selectableRowsComponentProps={{ inkDisabled: true }}
        onSelectedRowsChange={this.updateState}
        conditionalRowStyles={conditionalRowStyles}
        clearSelectedRows={this.state.toggledClearRows}
         expandableRows
         expandableRowsComponent={<ExpandableComponent />}
      />
      </div></div>
    )
  }
};
export default MyComponentHook;