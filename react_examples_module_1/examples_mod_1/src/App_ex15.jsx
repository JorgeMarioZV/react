// Example 15 - Class Component - Passing Data from Child to Parent

import { Component } from "react";

class App extends Component {
    state = { message : "" };
    func1 = (childData) => {
        this.setState( { message : childData } );
    };
    render () {
        return (
            <div>
                <AppInner parentCallback={this.func1}/>
                <p>{ this.state.message }</p>
            </div>
        );
    }
}

class AppInner extends Component {
    sendData = () => {
        setInterval(() => {
            const currTime = Date();
            this.props.parentCallback(currTime);
        }, 1000);
    };
    componentDidMount() {
        this.sendData();
    }
    render () {
        return <div></div>;
    }
}

export default App;