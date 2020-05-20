import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Login from '../components/Account/Login'
import Signup from '../components/Account/Signup'
import PasswordReset from '../components/Account/PasswordReset'


export default class Account extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Route path='/account/password' component={PasswordReset} />
                <Route path='/account/login' exact component={Login} />
                <Route path='/account/signup' exact component={Signup} />
            </div>
        )
    }
}
