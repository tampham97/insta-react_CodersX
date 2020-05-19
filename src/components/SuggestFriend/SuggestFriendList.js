import React, { Component } from 'react'
import SuggestFriendItem from './SuggestFriendItem'

export default class SuggestFriendList extends Component {
    render() {
        return (
            <div className='recommend-container'>
                <div className="recommend-header">
                    <span>Gợi ý cho bạn</span>
                    <a href='/'>Xem tất cả</a>
                </div>
                <SuggestFriendItem/>
                <SuggestFriendItem/>
                <SuggestFriendItem/>
                <SuggestFriendItem/>
            </div>
        )
    }
}
