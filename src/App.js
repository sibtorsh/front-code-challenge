import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="dashboard/login" element={<LoginForm />} />
          <Route path="dashboard/users" element={<UserTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
