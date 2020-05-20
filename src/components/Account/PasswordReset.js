import React, { Component } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import {Link} from 'react-router-dom'

export default class PasswordReset extends Component {
    render() {
        return (
            <div className="box">
                <a href='/' className='logo'>
                    <div className="logo-lock"></div>
                </a>
                <Divider>Trouble Logging In?</Divider>
                <p>Enter your username or email and we'll send you a link to get back into your account.</p>
                <Form >
                    <Input  placeholder="Email, Phone or Number" style={{marginBottom:'15px'}} />
                    <Button type="primary" htmlType="submit" className="login-form-button"  block> Send Log in Link</Button>
                </Form>
                <Divider>Or</Divider>
                <Link to='/account/signup' style={{display:"block"}}>Create new account?</Link>
                <Link to='/account/login'>Back to Login</Link>
            </div>
        )
    }
}
