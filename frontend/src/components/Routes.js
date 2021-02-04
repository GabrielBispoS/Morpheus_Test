import React, {Component} from 'react';
import {
    Route, Switch
} from 'react-router-dom';

import users from './users.js';
import create_user from './create_user.js';


export default class Routes extends Component {

    render() {

        return(
            <main className="Container">
                <Switch>
                    <Route exact path="/" component={users}/>
                    <Route path="/users" component={users}/>
                    <Route path="/create_user" component={create_user}/>
                </Switch>

            </main>
            )
    }
}