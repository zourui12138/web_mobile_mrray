import React, { Component } from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Platform from "../modules/Platform";
import Home from "../modules/home/Home";

export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // onEnter钩子还可以用来做认证。
    enter() {
        console.log('用户进入');
        console.log(this.state.date);
    }
    leave() {
        console.log('用户离开');
        console.log(this.state.date);
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="/home" />
                <Route path="/" component={Platform}>
                    <Route path="/home" component={Home}/>
                </Route>
            </Router>
        );
    }
}