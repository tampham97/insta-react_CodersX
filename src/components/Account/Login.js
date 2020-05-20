import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class Login extends Component {
    render() {
        return (
            <div className="box">
                <a href='/' className='logo'>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        className="logo-img" alt="" />
                </a>
                <Form >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" style={{marginBottom:'15px'}} />
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"  style={{marginBottom:'15px'}} />
                    <Button type="primary" htmlType="submit" className="login-form-button"  block> Log in</Button>
                </Form>
                <Divider>Or</Divider>
                <Link to='/account/password' >Forget password?</Link>
                <p>Don't have an account?<Link to='/account/signup'> Sign up</Link></p>
            </div>
        )
    }
}
