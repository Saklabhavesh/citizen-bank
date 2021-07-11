import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Box from './box';
import Footer from './footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Account() {

    const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} `
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
        });
    }, []);
    const [debit, setDebit] = useState([{
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
            url: "http://localhost:3001/debit",
        }).then(res => {
            setDebit(res.data);
            // console.log(debit);
        });
    }, []);
    const [credit, setCredit] = useState([{
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
            url: "http://localhost:3001/credit",
        }).then(res => {
            setCredit(res.data);
            // console.log(credit);
        });
    }, []);
    return <div>
        <div className="welcome">
            <h1>Welcome {user.name}!!</h1>
            <hr></hr>
        </div>
        <div className="container">
            <div className="row">
                <div className="col"><Box
                    color="box-green"
                    head="Current Balance :"
                    amount={user.amount}
                    name={user.name}
                    no={`A/C no : ${user.account}`}
                    date={date}

                /></div>
                <div className="col"><Link to="/account/credit" className="link"><a><Box
                    color="box-blue"
                    amount={credit.length < 1 ? "NA" : credit[credit.length - 1].amount }
                    head="Last Credit :"
                    name={`From : ${credit.length < 1 ? "NA" : credit[credit.length - 1].from}`}
                    no={`A/C no : ${credit.length < 1 ? "NA" : credit[credit.length - 1].id}`}
                    date={credit.length < 1 ? date : credit[credit.length - 1].Date}
                />
                </a></Link></div>

                <div className="col"><Link to="/account/debit" className="link"><a><Box
                    color="box-red"
                    amount={debit.length < 1 ? "NA" : debit[debit.length - 1].amount}
                    head="Last Debit :"
                    name={`To : ${debit.length < 1 ? "NA" : debit[debit.length - 1].to}`}
                    no={`A/C no : ${debit.length < 1 ? "NA" : debit[debit.length - 1].id}`}
                    date={debit.length < 1 ? date : debit[debit.length - 1].Date}
                />
                </a></Link></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col"><Link to="/account/transaction" className="link"><a><Box
                    color="box-yellow"
                    amount={trans.length < 1 ? "NA" : trans[trans.length - 1].amount}
                    head="Last Transaction :"
                    name={`To : ${trans.length < 1  ? "NA" : trans[trans.length - 1].to}`}
                    no={`From : ${trans.length < 1  ? "NA" : trans[trans.length - 1].from}`}
                    date={trans.length < 1 ? date : trans[trans.length - 1].Date}
                />
                </a></Link></div>
                <div className="col"><Link to="/account/blog" className="link"><a><Box
                    color="box-grey"
                    amount="Priceless"
                    head="Our Blogs"
                    name={`From : Authors`}
                    date={date}
                />
                </a></Link></div>
                <div className="col"></div>
            </div>
        </div>
    </div>
}

export default Account;