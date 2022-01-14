import io from "socket.io-client"
import { useEffect, useState } from 'react';
import "./home.css"

function Home(props) {
    const [socket,setSocket] = useState(null)
    const [message,setMessage] = useState("")
    const [messageData,setMessageData] = useState([])
    const [allMessage,setAllMessage] = useState([])

    // useEffect(()=>{
    //   const newSocket = io("http://localhost:5000")
    //   setSocket(newSocket)
    //   return ()=> newSocket.close()
    // },[setSocket])
    useEffect(()=>{
        const result = []
        messageData.forEach(element => {
        result.push(
            <div className='message-mine'>
                <p>{element.sender}</p>
                <p className='message-text'>{element.message}</p>
            </div>
        )
        })
        setAllMessage(result)
    },[messageData])

    return(
        <div className='container' style={{height:window.innerHeight}}>
              <div className='side-left'>
                <button onClick={()=>props.logout()}>logout</button>
              </div>

              <div className='message'>
                <div className='message-header'>

                </div>
                <div className='message-body'>
                  {allMessage}
                </div>
                <div className='message-footer'>
                    <textarea 
                      onKeyUp={(e)=>{
                        if(e.key=="Enter"){
                          setMessageData([...messageData,
                            {
                              sender: "tojonirina",
                              message:message
                            }
                          ])
                          setMessage("")
                          e.target.style.height = "20px"
                        }else{
                          e.target.style.height = "1px"
                          e.target.style.height = (e.target.scrollHeight) + "px"
                        }
                      }} 
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                      
                      className='message-input'>
                    </textarea>
                </div>

              </div>

              <div className='side-right'>


              </div>
            
          </div>
    )
}

export default Home