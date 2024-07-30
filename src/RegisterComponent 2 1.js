import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthService from './AuthService';
// import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        let result = validateValues();

        if (result === true) {
        try {
            const response = await AuthService.register({ firstName, lastName, userName, password });
            setMessage(response.data);
            if (response.data === 'User registered successfully') {
                navigate('/login');
            }
        } catch (error) {
            setMessage('Registration failed');
        }
    } else {
        // alert("Please Enter the Valid Inputs!!!");
      }
    };

    const validateValues = () => {
        let isValid = true;

        const regexLettersOnly = /^[A-Za-z]+$/;

        if (firstName.trim() === ''){
            alert("Please enter First Name !!! ");
            return  false;
        }
        else if (!regexLettersOnly.test(firstName)) {
            setFirstNameError('First Name should contain only letters');
            isValid =  false;
        } else {
            setFirstNameError('');
        }

         if (lastName.trim() === ''){
            alert("Please enter Last Name !!! ");
            return  false;
        }
        else if (!regexLettersOnly.test(lastName)) {
            setLastNameError('Last Name should contain only letters');
            isValid =  false;
        } else {
            setLastNameError('');
        }

         if (userName.trim() === ''){
            alert("Please enter User Name !!! ");
            return  false;
        }
         if (password.trim() === ''){
            alert("Please enter Password !!! ");
            return  false;
        }
    

        const regexUpperCase = /[A-Z]/;
        const regexSymbol = /[!@#$%^&*(),.?":{}|<>]/;
        const regexNumber = /[0-9]/;

        if (!regexUpperCase.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
            isValid =  false;
        }
        if (!regexSymbol.test(password)) {
            setPasswordError('Password must contain at least one symbol');
            isValid =  false;
        }
        if (!regexNumber.test(password)) {
            setPasswordError('Password must contain at least one number');
            isValid =  false;
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            isValid =  false;
        }

        // Additional custom validations can be added here
        return isValid ;
    }

    return (
        <div class="body1">
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="cards">
                        <div className="card-header">Registration</div>
                        <div className="card-body">
                            {message && <div className="alert alert-info">{message}</div>}
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    {firstNameError && <small className="text-danger">{firstNameError}</small>}
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    {lastNameError && <small className="text-danger">{lastNameError}</small>}
                                </div>
                                <div className="form-group">
                                    <label>userName</label>
                                    <input
                                        type="userName"
                                        className="form-control"
                                        value={userName}
                                        onChange={(e) => setuserName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) =>{
                                            setPassword(e.target.value);
                                            setPasswordError('');
                                        }}
                                    />
                                    {passwordError && <small className="text-danger">{passwordError}</small>}
                                </div>
                               <center> <button type="submit" className="btn btn-primary">Register</button></center>
                            </form>
                            <div className="mt-3">
                                <span>Already registered? <Link to="/login">Login here</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default RegisterComponent;