// Example 6: All in One File. With JS in HTML

// Before
// --------------------------------------------
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Hello React!</h1>,
//   document.getElementById('root')
// );
// --------------------------------------------


// After
// --------------------------------------------
import { createRoot } from 'react-dom/client';

const myElement = (
  <>
    <p>
      React is {5 + 5} times better with JSX
    </p>
  </>
);

createRoot(document.getElementById('root')).render(
  <>
  <h1>Hello React!</h1>
  {myElement}
  </>
);
// --------------------------------------------