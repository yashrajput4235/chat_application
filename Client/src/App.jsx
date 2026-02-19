import React from 'react'
import io from "socket.io-client";

const socket=io("http://localhost:1000");
const App = () => {
  return (
    <>
      {/*make class of join room*/}
      <div className="join_room">
        <h1>Join Chat</h1>
        <input type="text" placeholder="Enter Your Name" />
        <input type="text"  placeholder="Enter Chat Room"/>
        <button>Join room</button>
      </div>  
    </>
  )
}

export default App