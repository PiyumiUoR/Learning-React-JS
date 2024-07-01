import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    axios.get('https://api.randomuser.me/?nat=US&results=5')
      .then(response => {
        setUsers(prevUsers => [...prevUsers, ...response.data.results]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUsers();
    console.log('More users loaded.');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Load Users" />
      </form>
      {loading ? (
        <Loading message="Loading users..." />
      ) : (
        users.map(user => (
          <div key={user.login.uuid} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <p>{user.cell}</p>
            <p style={{color: 'red'}}>{`${user.name.first} ${user.name.last}`}</p>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
