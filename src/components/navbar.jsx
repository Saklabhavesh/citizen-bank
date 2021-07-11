import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Link } from "react-router-dom"
function Navbar(props) {
    const history = useHistory()
    let user = props.user;
    function HandleClick() {
        if (user == undefined) {
            history.push("/register");
        } else {
            axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:3001/logout",
            }).then(res => {
                history.push("/");
            });
        }
    }

    return (<nav class="navbar navbar-light ">
        <div class="container-fluid">
            <h1>Citizen Bank</h1>
            <ul class="nav-item">
                <li>
                    <Link to="/account" >
                        <a >Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/Transfer" >
                        <a >Transfer</a>
                    </Link>
                </li>
                <li>
                    <Link to="/account/blog" >
                        <a >Blogs</a>
                    </Link>
                </li>
                <li><Link><a onClick={HandleClick}>{user != undefined ? "log out" : "sign up"}</a></Link></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;