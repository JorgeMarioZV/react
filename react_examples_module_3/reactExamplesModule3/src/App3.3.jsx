// Example 3.3: Dependencies in useEffects
// Not sure what the heck this code does

import React, { useState, useEffect } from 'react';

function SideEffect() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  },[count]); // Runs only when count changes

  const increment = () => setCount(count + 1);

}

export default SideEffect;