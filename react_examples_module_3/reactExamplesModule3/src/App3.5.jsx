// Example 3.5: API Fetch

import React, { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
  },[]);
  // Si lo saco del useEffect igual funciona
  // Imprime 2 veces pero no se muy bien porqué
  
}

export default App;