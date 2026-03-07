// Example 17 - Functional Component - useState
import React, { Component, useState } from "react";


function App () {
    const Employee_id = 111;
    return (
        <div>
            <EmployeeData name="John" EmployeeID={Employee_id} dept_id={567} increase={10000}/>
            {/* <EmployeeData name="John" EmployeeID={Employee_id} dept_id={567} dept_name="IT"/> */}
        </div>
    );
}

const EmployeeData = (props) => {
    // EmployeeData.defaultProps = { dept_name : "Human Resources" };
    const [showIncrease, setShowIncrease] = useState(false);
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Employee ID: {props.EmployeeID}</h2>
            <h2>Department Name: {props.dept_name}</h2>
            <h2>Department ID: {props.dept_id}</h2>
            <botton onClick={() =>
                setShowIncrease(!showIncrease)
            }>
                Click here to {showIncrease ? 'hide' : 'show'} the yearly increment
            </botton>
            {showIncrease && <div>{props.increase}</div>}
            
        </>
    );
};

export default App;