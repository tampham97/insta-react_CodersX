import React from 'react';

import Menu from './components/Header/Menu'
import 'antd/dist/antd.css';
import './App.css';
import { Row, Col } from 'antd';
import SuggestFriendList from './components/SuggestFriend/SuggestFriendList';
import Acticle from './components/Acticle/Acticle';


function App() {
  return (
    <React.Fragment>
      <Menu />
      <div className='content'>
        <Row>
          <Col sm={16}>
            <Acticle/>
            <Acticle/>
            <Acticle/>
          </Col>
          <Col sm={8}>
            <div className='profile'>
              <img className='avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpieEIm8fvpLUTwVQOxfEZcnTOPh5M5UNPoFFeWSpQgUPlh4-3&usqp=CAU' alt='...' />
              <div className="name">
                <span >taam_pham</span>
                <span className="desc" >Tam Pham</span>
              </div>
            </div>
            <SuggestFriendList />
          </Col>
        </Row>
      </div>
    </React.Fragment>


  );
}

export default App;
