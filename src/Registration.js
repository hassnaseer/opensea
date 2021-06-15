import React, {useState} from 'react';

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div className='login'>
            <form className='login-form'>
                <h1>Registration Page</h1>
                <input
                    type="name"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="name"
                    placeholder="Last Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit-btn">Sign Up</button>
                {/*<p><a href="">Register a new Account</a></p>*/}
            </form>
            <div>


            </div>


        </div>
    )
}

export default Registration;
