// Example 14 - Class Component - Passing Data from Parent to Child

import { Component } from "react";

class App extends Component {
    state = {
        childColor : "green",
        name : "John"
    };
    changeColor = () => {
        const newColor = document.getElementById("colorbox").value;
        this.setState( { childColor : newColor } );
    };
    changeName = () => {
        const newName = document.getElementById("namebox").value;
        this.setState( { name : newName } );
    };

    render () {
        return (
            <div>
                Color <input type="text" onChange={this.changeColor} id="colorbox"/><br/>
                Name <input type="text" onChange={this.changeName} id="namebox"/><br/>
                <AppInner color={this.state.childColor} name={this.state.name}/>
            </div>
        );
    }
}

class AppInner extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const txtStyle = { color : this.props.color };
        return (
            <span style={txtStyle}>
                { this.props.name }
            </span>
        );
    }
}

export default App;