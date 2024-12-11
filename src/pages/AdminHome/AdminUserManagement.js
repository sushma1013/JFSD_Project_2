import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Registered Users</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No registered users found.</p>
      )}
    </div>
  );
};

export default AdminUserList;
