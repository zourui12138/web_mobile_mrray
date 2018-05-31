import React, { Component } from 'react';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import Platform from "../modules/Platform";
import Home from "../modules/home/Home";
import Baas from "../modules/products/Baas";
import Watermark from "../modules/products/Watermark";
import Sensitive from "../modules/products/Sensitive";
import News from "../modules/news/News";
import About from "../modules/about/About";

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
                    <Route path="/baas" component={Baas}/>
                    <Route path="/watermark" component={Watermark}/>
                    <Route path="/sensitive" component={Sensitive}/>
                    <Route path="/news" component={News}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        );
    }
}