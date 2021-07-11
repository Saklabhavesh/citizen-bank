import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import Home from './home';
import Register from './register';
import Account from './account';
import Transfer from './transfer';
import Transaction from './transaction';
import Debit from './debit';
import Credit from './credit';
import Blog from './blog';
import Login from './login';
import Footer from './footer';

function App() {
    const [user, setUser] = useState([{
        id: "",
        name: "",
        email: "",
        contact: "",
        address: "",
        amount: "",
        password: ""
    }]);
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/account",
        }).then(res => {
            setUser(res.data);
        });
    },[]);

    return <div>
        <Router>
            <Navbar user = {user.name}/>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/account" exact component={Account} />
            <Route path="/transfer" exact component={Transfer} />
            <Route path="/account/transaction" exact component={Transaction} />
            <Route path="/account/credit" exact component={Credit} />
            <Route path="/account/debit" exact component={Debit} />
            <Route path="/account/blog" exact component={Blog} />
            <Footer />

        </Router>
    </div>
}
export default App;