import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import axios from 'axios';

function Blog() {
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
            <h1 style={{ textAlign: "center" }}>Our Blogs</h1>
        </div>
        <div className="container">

            <p>Sunday, May 9, 2021</p>
            <h2>ICICI Lombard to give up to 2-month advance salary to COVID positive employees</h2><br></br>
            <p>Private sector non-life insurer ICICI Lombard on Saturday said it will give up to two months' gross salary in advance to all its COVID positive employees. In order to ease the burden for its employees in the wake of the rapid spread of the coronavirus, the company has decided to provide up to two months' gross salary in advance to every COVID positive employee, ICICI Lombard NSE -0.26 % said in a statement.
            <br></br>
            The individual can pay back the advance in 6 or 12 monthly instalments at a later date, the company said.
            <br></br>
            The insurance company will also reimburse medical infrastructure support expenses up to a maximum of Rs 10,000 per family member, arising from home quarantine in case of infected employees.
            <br></br>
            The benefit also includes a spouse, two children up to 25 years and dependent parents, it added.
            <br></br>
            Recently, ICICI Lombard had announced its decision to bear the vaccination cost for all its employees and their dependents.
            <br></br>
            The insurer also stated that it is also tying up with healthcare facilities in the country to further facilitate the vaccine inoculation programme.
            Further, the company is also providing a family floater cover of Rs 4 lakh and corporate buffer of Rs 3 lakh to support their employees and families during such trying times.
            <br></br>
This insurance cover includes the employee, spouse, two children (up to 25 years of age) and dependent parents, the company added.</p>
        </div><hr></hr>
        <div className="container">

            <p>saturday, May 8, 2021</p>
            <h2>The Reserve Bank of India reopened a one-time debt restructuring scheme</h2><br></br>
            <p>Dear Members,
            <br></br>
            The Reserve Bank of India reopened a one-time debt restructuring scheme as the economy braces for the impact of a renewed surge in Covid-19 cases. Retail borrowers and small businesses will be permitted to recast their loans, without being downgraded to non performing category, under the scheme.
            <br></br>
            ● The one-time restructuring scheme will be available for borrowers with aggregate outstanding dues of up to Rs 25 crore.
            <br></br>
            ● Only accounts which are classified as standard as of March 31, 2021 can be restructured.
            <br></br>
            ● Borrowers who have received relief under previous restructuring schemes, including that announced last year, would not be eligible.
            <br></br>
            ● As part of the scheme, lenders can extend the tenor of the loan by up to two years and also offer a moratorium for this period.
            <br></br>
            ● The RBI also said that any accounts restructured last year under the one-time restructuring scheme can be given a moratorium of up to two years, if not already provided.
            <br></br>
            ● Further, the banking regulator allowed lenders to review the working capital limits for small businesses that had restructured their dues in 2020 as a one one-time measure.
            <br></br>
            The scheme would have to be invoked by Sept. 30 and implemented within 90 days of invocation, RBI Governor Shaktikanta Das said today</p>
        </div>
        <Footer />
    </div>
}

export default Blog;