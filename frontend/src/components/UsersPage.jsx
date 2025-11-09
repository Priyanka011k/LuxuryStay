import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">👥 Registered Users</h2>
      <p className="text-muted text-center">Monitor user activity and access control here.</p>

      {users.length === 0 ? (
        <div className="alert alert-warning text-center">
          No users found yet.
        </div>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{`${user.firstName} ${user.middleName || ""} ${user.lastName}`.trim()}</td>
                <td>{user.email}</td>
                <td>{user.contact || "N/A"}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersPage;
