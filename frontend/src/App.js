import React, {Component} from 'react';
import Navbar from './components/header';
import './styles.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './components/Routes.js';


export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Routes/>
                </div>
            </Router>
        )
    }


}

