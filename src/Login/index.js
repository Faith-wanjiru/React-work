import "./index.css";
import { useState } from "react";
import { login } from "./utils";
import{Link, useNavigate} from 'react-router-dom';
const Login = () => {
  
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  console.log({ username });

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login({ username, password });
    navigate('./users')
    console.log({ result });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
      {/* <button type="submit">Login</button> */}
      
        <h2>Login</h2>
        <input
          placeholder="Enter Username"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        {/* <button type="submit">Login</button> */}
        <Link to="/users"><button type='submit'>Login</button></Link>
      </form>
      
    </div>
  );
};

export default Login;
