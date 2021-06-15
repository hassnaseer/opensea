import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import Registration from "./Registration";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   return(
      <div className='login'>
          <form className='login-form'>
              <h1>Login Page</h1>
              <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="submit-btn">Submit</button>
              <Link to="/register" className="Link">Register a new Account</Link>
          </form>
      </div>
    )
}

export default Login;
