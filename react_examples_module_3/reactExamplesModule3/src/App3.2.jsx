// Example 3.2: useEffects and side Effects

import React, { useState, useEffect } from 'react';

function SideEffect() {
  const [foods, setFoods] = useState([]);
  
  useEffect(() => {
    fetch('https://api.npoint.io/d542b9ad99f501ab3dbf')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setFoods(data);
    })
    .catch(error => console.error('Error fetching users:', error));
  },[]); // Empty dependency array means this effect runs only once when the componet mounts
  
  return (
    <div>
      <h1>Food List</h1>
      <ul>
        {foods.map((food) => {
          return (<>
            <li><h1>{food.name}</h1></li>
            <p>food.description</p> <p>food.price</p>
            <p>food.category</p> <p>food.ingredients</p>
            <img src={food.image_url} alt="" height="100px" width="100px" />
          </> )
        })}
      </ul>
    </div>
  );
}

export default SideEffect;