import React, { Component } from 'react'

export default class SuggestFriendItem extends Component {
    render() {
        return (
            <div className="info">
                <div className="avatar" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpieEIm8fvpLUTwVQOxfEZcnTOPh5M5UNPoFFeWSpQgUPlh4-3&usqp=CAU')` }} />
                <div className="name">
                    <span >taam_pham</span>
                    <span className="desc">Gợi ý cho bạn</span>
                </div>
                <a href="/" className="follow">
                    Theo dõi
                </a>
            </div>
        )
    }
}
