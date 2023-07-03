import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/", {
        username,
        password,
      });
      if (response.status === 200) {
        history.push("dashboard/users");
      }
    } catch (error) {
      console.log("Login failed", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto mt-12">
      <h2 className="text-2xl mb-6 text-center font-bold">فــرم ورود</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block font-bold text-gray-700 mb-2 text-right"
          >
            :نام کاربـــری
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-right"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block font-bold text-gray-700 mb-2 text-right"
          >
            :رمز عبـــور
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:border-blue-500 text-right"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
