// Example 3.4: Custom Hook - Toggle Button

import React, { useState } from 'react';

function ToogleButton() {
  const [isToogled, toggle] = UseToggle(false);

  // Notar que esta funcion aca abajo pudo definirse como un componente en un archivo aparte con un export default UseToggle
  function UseToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {setValue(!value);};
    return [value, toggle];
  }

  return (
    <div>
      <h1>Toogle Button</h1>
      <button onClick={toggle}>
        {isToogled ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToogleButton;