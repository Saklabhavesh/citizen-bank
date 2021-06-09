import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';
import Row from './row';

function Transaction() {

    const [trans, setTrans] = useState([{
        id: "",
        from: "",
        to: "",
        amount: "",
        date: ""
    }]);
    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/transaction",
        }).then(res => {
            setTrans(res.data);
            // console.log(trans);
        });
    }, []);
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
    }, []);

    return <div>
        <Navbar user={user.name} />
        <div className="welcome">
            <h1 style={{ textAlign: "center" }}>Transaction History</h1>
        </div>
        <div className="row">
            <div className="col">
                <h3>Transaction ID</h3>
            </div>
            <div className="col">
                <h3>Sender</h3>
            </div><div className="col">
                <h3>Reciever</h3>
            </div><div className="col">
                <h3>Amount</h3>
            </div><div className="col">
                <h3>Date</h3>
            </div>

        </div>
        <hr></hr>
        <div>
            {trans.map(el => (
                <Row
                    id={el.id}
                    from={el.from}
                    to={el.to}
                    amount={el.amount}
                    Date={el.Date} />
            ))}
        </div>

        <Footer />
    </div>
}

export default Transaction;