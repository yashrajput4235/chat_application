import React, { useEffect, useState ,useRef} from 'react'

const Chat = ({socket,username,room}) => {
    const [currentMessage,setCurrentMessage]=useState("");
    const [messageList,setMessageList]=useState([]);    
    const containerRef=useRef(null);

    const sendMessage=async()=>{
        if(currentMessage!==""){
            const messageData={
                id:Math.random(),
                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message",messageData);
            setMessageList((list)=>[...list,messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(()=>{
        const handleReceiveMessage=(data)=>{
            setMessageList((list)=>[...list,data]);
        }
        socket.on("receive_message",handleReceiveMessage);
        return()=>{
            socket.off("receive_message",handleReceiveMessage);
        }           
    },[socket])

    useEffect(()=>{
        if(containerRef.current){
            containerRef.current.scrollTop=containerRef.current.scrollHeight;
        }
    },[messageList])

  return (
    <>
    <div className="chat_container">
        <h1>Welcome {username}</h1>
        <div className="chat_box" ref={containerRef} style={{ overflowY: 'auto', maxHeight: '400px' }}>
            {
                messageList.map((message)=>{
                    return(
                        <div key={message.id} className="message_content" id={username===message.author?"you":"other"}>
                            <div>
                                <div className="msg" id={username===message.author?"y":"b"}>
                                    <p>{message.message}</p>
                                </div>
                                <div className="msg_detail">
                                    <p>{message.time}</p>
                                    <p>{message.author}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className="chat_body">
            <input type="text" value={currentMessage} onChange={(e)=>setCurrentMessage(e.target.value)} placeholder='Type Your Message...' onKeyPress={(e)=>
                e.key==="Enter" && sendMessage()
            }/>
            <button onClick={sendMessage}>&#9658;</button>

        </div>
    </div>
    </>

  )
}

export default Chat