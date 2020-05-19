import React, { Component } from 'react';

import { CommentOutlined, ShareAltOutlined, HeartOutlined, BookOutlined } from '@ant-design/icons';


export default class Interaction extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='interaction'>
                    <div className="icon-react">
                        <HeartOutlined className="icon-react-item" />
                        <CommentOutlined className="icon-react-item" />
                        <ShareAltOutlined className="icon-react-item" />
                        <BookOutlined className="icon-react-item float-right" />
                    </div>
                    <div className='likes-number'>Like by <span className='name-people'>diego.simon </span>and <span className='name-people'>33 others.</span>
                    </div>
                    <div className='status'>
                        <div className='name-people'>taam_pham</div>
                        <div className='caption'>hope you find that happiness you’ve been pretending to have</div>
                    </div>
                    <div className="comment-list">
                        <div className='comment-item'>
                            <div className='name-people'>lena201__</div>
                            <div className='caption'>this pattern is not suitable for cases</div>
                        </div>
                        <div className='comment-item'>
                            <div className='name-people'>teo.ph12</div>
                            <div className='caption'>this pattern is not suitable for cases</div>
                        </div>
                    </div>
                </div>
                <div className='post-comment'>
                    <input type='text' placeholder='Add a comment...'/>
                    <button>Post</button>
                </div>
            </React.Fragment>
        )
    }
}
