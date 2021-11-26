import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import Navbar from '../../../layouts/frontend/Navbar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {

    const history = useHistory();

    const [loginInput, setLogin] = useState({
        username: '',
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (event) => {
        event.persist();
        setLogin({ ...loginInput, [event.target.name]: event.target.value });
    }

    const loginSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: loginInput.username,
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    if (res.data.username === 'admin') {
                        history.push('/admin/dashboard');
                    } else {
                        history.push('/');
                    }
                }
                else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
                }
                else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });
    }

    return (
        <div>
            <Navbar />

            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1 className="text-center">Log In</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* start log in */}
            <div className="ex-form-1 pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3">
                            <div className="text-box mt-5 mb-5">
                                <p className="mb-4">You don't have a password? Then please <Link className="blue" to="/register">Sign
                                    Up</Link></p>
                                {/* Log In Form */}
                                <form onSubmit={loginSubmit}>
                                    <div className="mb-4 form-group">
                                        <label>Email ID</label>
                                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                        <span>{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="mb-4 form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                        <span>{loginInput.error_list.password}</span>
                                    </div>
                                    {/* <div className="mb-4 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">I agree with the site's stated <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms &amp;
                                            Conditions</a></label>
                                    </div> */}
                                    <div className="form-group mb-3">
                                        <button type="submit" className="form-control-submit-button">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;