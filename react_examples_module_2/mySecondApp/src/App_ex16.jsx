// Example 16 - Functional Component

function App () {
    return (
        <div>
            <EmployeeData name="John"/>
        </div>
    );
}

const EmployeeData = (props) => {
    return (
        <>
            Name: <h1>{props.name}</h1>
        </>
    );
};

export default App;