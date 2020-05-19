import React, { Component } from 'react'
import Heading from './Heading'
import Interaction from './Interaction'

export default class Acticle extends Component {
    render() {
        return (
            <div className='acticle'>
                <Heading/>
                <img className="image" src='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='...' />
                <Interaction/>
            </div>
        )
    }
}
