// Example 9: Class Component - Managing Props

import React from "react";
import EmployeeDetails from "./Components/Comp_ex9";

function OrganizationDetails() {
    let employee_designation = 'Project Manager';
    return (
        <>
            <EmployeeDetails employee_designation = { employee_designation } />       
        </>
    ); 
}

export default OrganizationDetails;