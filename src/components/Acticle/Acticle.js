import React, { Component } from 'react'
import Heading from './Heading'
import Interaction from './Interaction'

export default class Acticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }
    onClickLikeBtn=()=>{
        this.setState({
            liked : !this.state.liked 
        })
    }
    render() {
        const {liked} = this.state;
        return (
            <div className='acticle'>
                <Heading/>
                <img className="image" src='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='...' onDoubleClick={this.onClickLikeBtn}  />
                <Interaction onClickLikeBtn = {this.onClickLikeBtn} liked={liked} />
            </div>
        )
    }
}
