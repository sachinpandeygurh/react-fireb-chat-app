import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from './firebase';

function Chats() {
  return (
   <div className="chats-page">
    <div className="nav-bar">
        <div className='logo-tab'>
            React Firb Chat app
        </div>
        <div className="logout-tab">Logout</div>
    </div>
    <ChatEngine 
    height="calc(100vh-66px)"
    projectID =""
 
    />
   </div>
  )
}

export default Chats ;
