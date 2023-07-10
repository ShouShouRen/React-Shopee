import React, { useContext, useEffect, useState } from "react";
import { Button, Input, message } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import "../../css/style.css";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const HandleLogin = () => {
    console.log('get');
    login(username, password).then(({ token, error }) => {
      if (!token) {
        message.error(error);
      }
    });
  };
  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated]);
  return (
    <div>
      <Input className="mb-3" type="text" size="large" placeholder="請輸入帳號" prefix={<UserOutlined></UserOutlined>} value={username} onChange={e => setUsername(e.target.value)}></Input>
      <Input className="mb-3" type="password" size="large" placeholder="請輸入密碼" prefix={<LogoutOutlined></LogoutOutlined>} value={password} onChange={e => setPassword(e.target.value)}></Input>
      <Button onClick={HandleLogin}>登入</Button>
    </div>
  )
}
export default LoginForm;