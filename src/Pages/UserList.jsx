import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import file CSS

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="user-list-container">
      <h1 className="user-list-header">List of Users</h1>
      {users.length > 0 ? (
        <div className="user-container">
          <h3 className="user-name">{users[currentIndex].name}</h3>
          <p className="user-info">Email: {users[currentIndex].email}</p>
          <p className="user-info">Phone: {users[currentIndex].phone}</p>
          <div className="button-container">
            {currentIndex > 0 && (
              <button className="prev-button" onClick={handlePrev}>Previous</button>
            )}
            {currentIndex < users.length - 1 && (
              <button className="next-button" onClick={handleNext}>Next</button>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserList;
