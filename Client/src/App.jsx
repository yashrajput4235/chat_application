import React, { useState } from 'react'
import io from "socket.io-client";
import Chat from './Chat';

const socket=io("http://localhost:1000");

const App = () => {
  // need two state variable 
  const [username,setUsername]=useState("");
  const [room,setRoom]=useState("");
  const [showChat, setShowChat] = useState(false);

  const join_chat=()=>{
    if(username!="" && room!=""){
      socket.emit("join_room",room);
      setShowChat(true);
    }
  }

  return (
    <>
      {!showChat ? (
        <div className="join_room">
          {/*make class of join room*/}
          <h1>Join Chat</h1>
          <input type="text" placeholder="Enter Your Name"
          onChange={(e)=>setUsername(e.target.value)} />
          <input type="text"  placeholder="Enter Chat Room"
          onChange={(e)=>setRoom(e.target.value)} />
          <button onClick={join_chat}>Join room</button>
        </div>  
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </>
  )
}

export default App