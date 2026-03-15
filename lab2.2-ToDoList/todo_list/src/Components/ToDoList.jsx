import React, { useEffect, useState } from 'react';
import './TodoList.css';


const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  const handleAddToDo = () => {
    if (headingInput.trim() != '') {
      setToDos(
        [...toDos, 
          {
            heading : headingInput,
            lists   : []
          }
        ]
      );
      setHeadingInput('');
    }
  };

  const handlDeleteToDo = (index) => {
    // Create a shallow copy of the current todos array
    const newTodos = [...toDos];
    // Remove the todo at the specified index
    newTodos.splice(index, 1);
    // Update the state with the new array (without the deleted todo)
    setToDos(newTodos);
  }

  // Function to handle adding a new list item to a specific todo heading
  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() != '') {  // Check if the input for the given index is not empty or just whitespace
      const newToDos = [...toDos]; // Create a copy of the current todos array
      newToDos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list
      setToDos(newToDos); // Update the todos state with the new list item
      setListInputs({...listInputs, [index]: ''}); // Clear the input field for that index
    }
  }
  
  // Function to update list input value for a specific heading index
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My ToDo List</h1>
        <div className="input-container">{/* Input field to enter a new heading */}
          <input 
            type="text" 
            className="heading-input" // CSS class for styling
            placeholder="Enter heading" // Text shown when input is empty 
            value={headingInput}
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }} // Add onChange event handler to update headingInput state
          />
        </div>
        <button className="add-list-button" onClick={handleAddToDo}>Add Heading</button>
      </div>
      <div className="todo_main">
        {toDos.map((toDo, index) => ( // Iterate over each todo item in the todos array
          <div key={index} className="todo-card">
            <div className="heading_todo">
              {/* Display the heading text of the current todo item */}
              <h3>{toDo.heading}</h3>
              {/* Button to delete the current heading by passing its index */}
              <button 
                className="delete-button-heading" 
                onClick={() => {handlDeleteToDo(index)}}
              >
                Delete Heading
              </button>
            </div>
            <ul>
              {/* Iterate over each list item inside the current todo */}
              {toDo.lists.map((list, listIndex) => (
                <li key={listIndex} className="todo_inside_list">
                  <p>{list}</p> {/* Display the text content of the list item */}
                </li>
              ))}
            </ul>
            <div className="add_list">
              <input 
                type="text" 
                className="list-input" 
                placeholder="Add list" 
                // No entiendo esto aquí abajo porque listInputs es un objeto, no un vector
                value={listInputs[index] || ''} // Use the value from listInputs array based on the current heading index
                onChange={(e) => {
                  handleListInputChange(index, e.target.value)
                }}
              />
              {/* Button to add the list item to the corresponding heading */}
              <button 
                className="add-list-button" 
                onClick={() => {handleAddList(index)}}
              >
                Add List
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
useEffect()
export default ToDoList;