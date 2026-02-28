// TOTALMENTE Malo. SOlo copio la info del ejemplo. NO entiendo un culo.
import {React,  Component } from "react";


class EmployeeDeteails extends Component {
  constructor(props) {
    super(props);
    this.state = { emp_id : '', emp_email: ''};
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState ({ [name] : value });
  };

  render() {
    const { name, value } = this.state;
    const { emp_id emp_email } = this.state;
    const { employee_designation } = this.props;

    return (
    <div class="EmployeeDetails">
      <input type="text" name="emp_id" value={emp_id} onchange={ this.handleInputChage } placeholder="Enter Employee Id"/>
      <input type="email" name="emp_email" value={emp_email} onchange={ this.handleInputChage } placeholder="Enter Employee Email"/>
      <button onclick={() => 
                window.alert(
                  `Employee ID: ${emp_id}, 
                  Email: ${emp_email},
                  Designation : ${ employee_designation }
                  `);
            }>Show Details
        </button>
    </div>
    );
  }
}

export default EmployeeDeteails;





// ------------------------
import React from "react";
import EmployeeDeteails from './EmployeeDetails';

function OrganizationDetails() {
  let Employee_designation = 'Project Manager';
  return (
    <>
    <EmployeeDeteails employee_designation = { employee_designation }/>
    </>
  );
}
export default OrganizationDetails;
