// Example 12 - Class Component Unmount

import React, { Component } from "react"; 

class AppInner extends Component {
    componentWillUnmount () {
        console.log("This component will unmount");
    }
    render () {
        return <div>Inner Component</div>;
    }
}

class App extends Component {
    state = { innerComponent : <AppInner/> };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ innerComponent : <div>Unmounted!</div> });
        }, 5000);
    }
    render () {
        console.log("Inside render");
        return (
            <div>{ this.state.innerComponent }</div>
        );
    }
}

export default App;