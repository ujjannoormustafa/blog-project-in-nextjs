"use client"
import React, { useState } from 'react';

function NameListApp() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
   {
      setNamesList([...namesList, name]);
      setName('');
    }
  };

  return (
    <div>
      <h2>Name List</h2>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <button onClick={handleAddName}>Add Name</button>
      <ul>
        {namesList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameListApp;
