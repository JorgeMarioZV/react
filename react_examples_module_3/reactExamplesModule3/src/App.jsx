// Example 3.1: Hooks

import React, { useState } from 'react'
// import './App.css'

function App() {
  // Delcare a new state variable "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} many times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App
