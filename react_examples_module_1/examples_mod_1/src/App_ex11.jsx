// Example 11 - Class Component LifeCycle

import { Component } from "react";

class App extends Component {

    // State (Class Attributes/Fields/Properties)
    state = {
        counter : 0
    };

    // Class Ordinary Method
    incrementCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };

    // (Update Method) Phase 2.1 - shouldComponentUpdate
    shouldComponentUpdate () {
        console.log("2 - Inside shouldComponentUpdate");
        return true;
    }

    // (Update Method) Phase 2.2 - getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log("3 - Inside getSnapshotBeforeUpdate");
        console.log("Prev counter is : " + prevState.counter);
        console.log("New counter is : " + this.state.counter);
        console.log("PrevProps is : " + prevProps);
        return prevState.counter;
    }

    // (Update Method) Phase 2.3 - componentDidUpdate
    componentDidUpdate () {
        console.log("4 - Inside componentDidUpdate");
    }

    // (Mount Method) Phase 1.2
    // (Update Method) Phase 2.4
    render () {
        console.log("1 - Inside render");
        return (
            <div>
                <button onClick={this.incrementCounter}>Click Me!</button>
                {this.state.counter}
            </div>
        );
    }

}

export default App;