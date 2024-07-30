import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from "./AuthService";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./login.css"

const LoginComponent = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let result = validateValues();

        if (result === true) {
        try {
            const response = await AuthService.login({ userName, password });
            if (response.data === "Login successful") {
                navigate('/home1');
            } else {
                setMessage('Invalid credentials');
            }
        } catch (error) {
            setMessage('Invalid credentials');
        }
    } else {
        // alert("Please Enter the Valid Inputs!!!");
      }
    };

    const validateValues = () => {
        if (userName.length === 0){
            alert("Please enter User Name !!! ");
            return false;
        }
        else if (password.length === 0){
            alert("Please enter Password !!! ");
            return false;
        }
        else {
            return true;
          }
    }

    return (
        <div class="body1">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="cards">
                            <div className="card-header">Login Form</div>
                            <div className="card-body">
                                {message && <div className="alert alert-danger">{message}</div>}
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="userName" >userName</label>
                                        <input
                                            name="userName"
                                            type="userName"
                                            className="form-control"
                                            value={userName}
                                            onChange={(e) => setuserName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" >Password</label>
                                        <input
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe">Remember me</label>
                                            <a href="" class="text-decoration-none float-end">Forget Password</a>
                                        </div>

                                    </div>
                                    <center><button type="submit" className="btn btn-primary">Login</button></center><br />
                                </form>
                                <div className="mt-3">
                                    <span>Not registered? <Link to="/register">Register here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
