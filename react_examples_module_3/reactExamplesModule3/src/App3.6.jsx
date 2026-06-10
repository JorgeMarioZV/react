// Example 3.6: Fetch Data using Axios

import React, { useEffect } from 'react';
import axios from 'axios';


function App() {

  useEffect(() => {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';
    axios.get(apiURL)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
  },[]);
  // Si lo saco del useEffect igual funciona
  // Imprime 2 veces pero no se muy bien porqué
  // Parace demorarse más que el API fetch norrmal del ejemplo 3.5
  
}

export default App;