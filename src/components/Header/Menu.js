import React, { Component } from 'react'


import { Input } from 'antd';
import { SearchOutlined,HomeOutlined,HeartOutlined,MessageOutlined,CompassOutlined } from '@ant-design/icons';


export default class Menu extends Component {
    render() {
        return (
            <div className='header'>
                <a href='/' className='header-logo'>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        className="logo-img" alt="" />
                </a>
                <div >
                    <Input className='header-search'  type='search' placeholder="Search" prefix={<SearchOutlined />} />
                </div>
                <div className='header-right'>
                    <HomeOutlined  className='header-right-item'/>
                    <MessageOutlined className='header-right-item' />
                    <CompassOutlined className='header-right-item' />
                    <HeartOutlined className='header-right-item'/>
                </div>
            </div>
        )
    }
}
