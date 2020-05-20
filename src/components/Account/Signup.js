import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Form, Input, Button, Divider } from 'antd';

export default class Signup extends Component {
    render() {
        return (
            <div className="box">
                <a href='/' className='logo'>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        className="logo-img" alt="" />
                </a>
                <Divider>Sign Up</Divider>
                <Form >
                    <Input  placeholder="Mobile Number or Email" style={{marginBottom:'15px'}} />
                    <Input  placeholder="Username" style={{marginBottom:'15px'}} />
                    <Input  type="password" placeholder="Password"  style={{marginBottom:'15px'}} />
                    <Button type="primary" htmlType="submit" className="login-form-button"  block> Sign up</Button>
                </Form>
                <Divider>Or</Divider>
                <p>Have an account? <Link to='/account/login'>Log in</Link></p>
                
            </div>
        )
    }
}
