// Example 13 - Class Component LifeCycle v2

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

    // (Mount Method) Phase 1.1 - componentWillMount
    // NO se ejecuta. Parece deprecated
    componentWillMount () {
        console.log("1 - Inside componentWillMount");
    }

    // (Mount Method) Phase 1.3 - componentDidMount
    componentDidMount () {
        console.log("3 - Inside componentDidMount");
    }

    // (Update Method) Phase 2.1 - shouldComponentUpdate
    shouldComponentUpdate () {
        console.log("4 - Inside shouldComponentUpdate");
        return true;
    }

    // (Update Method) Phase 2.0 - getDerivedStateFromProps (NOT ALLOWED)

    // (Update Method) Phase 2.2 - getSnapshotBeforeUpdate
    // Se ejecuta despues de renderizar lo que no me cuadra
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log("5 - Inside getSnapshotBeforeUpdate");
        console.log("Prev counter is : " + prevState.counter);
        console.log("New counter is : " + this.state.counter);
        console.log("PrevProps is : " + prevProps);
        return prevState.counter;
    }

    // (Update Method) Phase 2.3 - componentDidUpdate
    componentDidUpdate () {
        console.log("6 - Inside componentDidUpdate");
    }

    // (Unmount Method) Phase 3.1 - componentWillUnmount
    componentWillUnmount () {
        console.log("7 - Inside componentWillUnmount");
    }


    // (Mount Method) Phase 1.2 - Render
    // (Update Method) Phase 2.4 - Render
    render () {
        console.log("2 - Inside render");
        return (
            <div>
                <button onClick={this.incrementCounter}>Click Me!</button>
                {this.state.counter}
            </div>
        );
    }

}

export default App;