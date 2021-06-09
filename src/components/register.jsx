import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';

function Register() {

    const [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
        amount: "",
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
    function handleClick(event) {
        event.preventDefault();

        const register = {
            name: input.name,
            email: input.email,
            contact: input.contact,
            address: input.address,
            amount: input.amount,
            password: input.password
        }
        // console.log(register);
        axios.post('http://localhost:3001/register', register).then(res => {
            // console.log(res);
            window.location.href = "/login";
        }).catch((err) => {
            console.log(err)
        });
    }
    return <div>
        <Navbar />
        <div className="login">
            <div className="container form ">
                <form className="form-group" onSubmit={handleClick}>
                    <h1>Register Your Account</h1>
                    <hr></hr>
                    <div className="line">
                        <input type="text" placeholder="Full Name" name="name" onChange={handleChange}></input>
                        <span className="line1"></span>
                    </div>
                    <div className="line">
                        <input type="email" placeholder="Email" name="email" onChange={handleChange}></input>
                        <span className="line2"></span>
                    </div>
                    <div className="line">
                        <input type="number" placeholder="Contact No." name="contact" onChange={handleChange}></input>
                        <span className="line1"></span>
                    </div>
                    <div className="line">
                        <input type="text" placeholder="Address" name="address" onChange={handleChange}></input>
                        <span className="line2"></span>
                    </div>
                    <div className="line">
                        <input type="number" placeholder="Initial amount" name="amount" onChange={handleChange}></input>
                        <span className="line1"></span>
                    </div>
                    <div className="line">
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
                        <span className="line2"></span>
                    </div>
                    <button type="submit">Register</button>
                    <p>Already a member? <a href="/login">Log In</a></p>
                </form>
            </div>
        </div>
        <Footer />
    </div>
}

export default Register;