import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';
import Account from './account';
import Transfer from './transfer';
import Transaction from './transaction';
import Debit from './debit';
import Credit from './credit';
import Blog from './blog';





function App() {

    return <div>
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/account" exact component={Account} />
            <Route path="/transfer" exact component={Transfer} />
            <Route path="/account/transaction" exact component={Transaction} />
            <Route path="/account/credit" exact component={Credit} />
            <Route path="/account/debit" exact component={Debit} />
            <Route path="/account/blog" exact component={Blog} />
        </Router>
    </div>
}
export default App;