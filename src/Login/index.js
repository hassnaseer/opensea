import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { useHistory } from "react-router-dom";
// import Layout from "../Page/layout";
// import Registration from "./Registration";

const Login = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = function (){
        console.log()
        history.push("/layout");
    };

    return(
        <div className='login'>
            <form className='login-form'
                  onSubmit={handleSubmit}>

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
                <button type="submit" className="submit-btn">Login</button>
                <Link to="/register" className="Link">Register a new Account</Link>
            </form>
        </div>
    )
}

export default Login;
