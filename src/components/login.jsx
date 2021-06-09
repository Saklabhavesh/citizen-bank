import Footer from './footer';
import Navbar from './navbar';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {

    const [input, setInput] = useState({
        email: "",
        password: ""

    });
    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "POST",
            data: {
                email: input.email,
                password: input.password
            },
            withCredentials: true,
            url: "http://localhost:3001/login",
        }).then((res) => {
            // console.log(res);
            window.location.href = "/account";
        });
    }

    return <div>
        <Navbar />
        <div className="login">
            <div className="container form ">
                <form className="form-group" onSubmit={handleSubmit}>
                    <h1>Sign in to your account</h1>
                    <hr></hr>
                    <div className="line">
                        <input type="text" placeholder="Email" name="email" onChange={handleChange}></input>
                        <span className="line1"></span>
                    </div>
                    <div className="line">
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
                        <span className="line2"></span>
                    </div>
                    <button type="submit">Login</button>
                    <p>Not a member? <a href="/register">Sign up</a></p>
                </form>
            </div>
        </div>
        <Footer />
    </div>
}

export default Login