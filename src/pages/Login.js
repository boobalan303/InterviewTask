import React from "react";
import "./Login.css"; 

function Login() {
    return (
        <div className="login-container">
        <div className="login">
            <div className="login-header">
                <h1>Login</h1>
            </div>
            <div className="login-content">
                <form className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <h3>Forget Password?</h3>
                    <button type="submit">Login</button>
                </form>
            </div>           
        </div>
        </div> 
    );
}

export default Login;