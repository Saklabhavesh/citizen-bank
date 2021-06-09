import React from 'react';
import axios from 'axios';

function Navbar(props) {

    let user = props.user ? "log out" : "sign up";
    function HandleClick() {
        if (user === "sign up") {
            window.location.href = "/register";
        } else {

            axios({
                method: "GET",
                withCredentials: true,
                url: "http://localhost:3001/logout",
            }).then(res => {
                // console.log(res);
                window.location.href = "/";
            });

        }
    }
    return (<nav class="navbar navbar-light ">
        <div class="container-fluid">
            <h1>Citizen Bank</h1>
            <ul class="nav-item">
                <li><a href="/account">Home</a></li>
                <li><a href="/Transfer">Transfer</a></li>
                <li><a href="/account/blog">Blogs</a></li>
                <li><a href="#" onClick={HandleClick}>{user}</a></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;