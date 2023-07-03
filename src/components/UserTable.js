import React, { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/db.json");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">کاربران</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border-b">نام</th>
            <th className="py-2 px-4 bg-gray-200 border-b">نام خانوادگی</th>
            <th className="py-2 px-4 bg-gray-200 border-b">جنسیت</th>
            <th className="py-2 px-4 bg-gray-200 border-b">آواتار</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.firstName}</td>
              <td className="py-2 px-4 border-b">{user.lastName}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={`/avatars/${user.gender}/${user.avatar}`}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
        >
          صفحه قبل
        </button>
        <button
          disabled={indexOfLastUser >= users.length}
          onClick={handleNextPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
};

export default UserTable;
