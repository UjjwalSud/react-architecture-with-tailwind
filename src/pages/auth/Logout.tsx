import React, { useState } from "react";
import AuthService from "../../services/auth/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import FormInput from "../../components/FormInput";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/Store';
import { login, logout } from '../../redux/AuthSlice';
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const from = (location.state as any)?.from?.pathname || "/";



  return (
    <>
     <h1>LogOut!</h1>
    </>
  );
};

export default Login;
