// Example 3: All in One File. App.jsx is not necessary

import { createRoot } from 'react-dom/client';

function Hello() {
  return (
    <>
        <h1>Hello World!</h1>
        <p>This a third example</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Hello />
);