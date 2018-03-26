import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './comps/Home.js'
import Login from './comps/Login.js'
// import Login from './comps/Login.css'
import About from './comps/About'
import Menu from './comps/Menu'

const MainConst = () => {
    return (
        <MuiThemeProvider>
        <Router>
        <div>
            <h1>Welcome to my home!</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
            </ul>
            <hr />

            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/menu" component={Menu}/>

        </div>
        </Router>
        </MuiThemeProvider>
    )
}
ReactDOM.render(<MainConst/>, document.getElementById('root'));
