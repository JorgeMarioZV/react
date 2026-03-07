// Example 7: Functions, Props, CSS, and Others
// --------------------------------------------
import { createRoot } from 'react-dom/client';
import './index.css';

function Car (props) {

  var x = '';
  const name = 'Jorge';
  const myfun = () => {
    alert(`Hello ${name}`);
  }
  const mybutton = 
    <button onClick={myfun}>
      Click me
    </button>;

  // mybutton.onClick =`` () => {x = 'myCSS';}
  // mybutton.addEventListener('click', () => x = 'myCSS');

  return (
    <>
      <p className={x}> My car is a {props.model}</p>
      {mybutton}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Car model = 'Mustang'/>
);