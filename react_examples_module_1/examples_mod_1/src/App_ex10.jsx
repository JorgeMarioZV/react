// Example 10 - componentDidMount() Method

import React, { Component } from "react";

// class App extends Component {
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("1 - Inside the Constructor");
    }
    componentDidMount = () => {
        console.log("4 - Inside ComponentDidMount");
    };
    render () {
        console.log("2 - Inside Render Method");
        return(
            <div>3 - The compenent is rendered</div>
        );
    }
}

export default App;