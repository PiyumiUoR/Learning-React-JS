import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // State to hold user data
  const [users, setUsers] = useState([]);

  // Fetching data from API
  useEffect(() => {
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="App">
      {users.map(user => (
        <div key={user.login.uuid}>
          <p>{user.cell}</p>
          <p>{`${user.name.first} ${user.name.last}`}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
