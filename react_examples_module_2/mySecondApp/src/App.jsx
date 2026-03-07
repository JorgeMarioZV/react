// Example 19 - Functional Component - useState Hook

import { useEffect, useState } from "react";
// import { renderToStaticMarkup } from "react-dom/server";

const StateManagement = () => {
    const [name, setName] = useState('John');
    const [buttonClicked, setButtonClicked] = useState(false); // State to track button click
    const updatedName = () => {
        setName('John Doe'); 
        setButtonClicked(true);// Set buttonClicked to true after undating name
    };
    return(
        <>
            <h1>State Management using useState</h1>
            <p>The name is {name}</p>
            <button onClick={updatedName} disabled={buttonClicked}>Click to update name</button>
            <ToggleMessage/>
            <MyComponent/>
        </>
    );
}; 

function ToggleMessage () {
    const [isVisible, setIsVisible] = useState(true);
    const toogleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <hr/>
            <h2>Toogle Message</h2>
            <button onClick={toogleVisibility}>
                {isVisible ? 'Hide Message' : 'Show Message'}
            </button>
        </div>
    );
}

function MyComponent() {
    let counter = 0;
    useEffect(() => {
        const timer = setInterval(() => {
            counter+= 1;
            console.log('Interval Tick');
            console.log({counter});      
        }, 1000);
        return () => {
            clearInterval(timer); // Cleasnup interval on unmount
        };
    }, [counter]);
    return (
        <div>
            <h1>Component Interval</h1>
            <p>Counter: {counter}</p> {/* No cambia. Es decir, que no se renderiza más de una vez */}
        </div>
    );
}

export default StateManagement;