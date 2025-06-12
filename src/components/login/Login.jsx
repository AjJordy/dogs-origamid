import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginPasswordLost from "./LoginPasswordLost";
import LoginCreate from "./LoginCreate";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
