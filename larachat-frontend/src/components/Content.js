import { useState, useEffect } from "react"
import React from 'react'
import Pusher from 'pusher-js'


const Content = () => {
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('username')
  const [messages, setMessages] = useState([])

  let allMessages = []

  useEffect(() => {

    Pusher.logToConsole = false;

    const pusher = new Pusher('b2a2f7a39eff2316738f', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function (data) {
      setMessages(oldMessages => [...oldMessages, data])
    });

  }, []);


  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        message
      })
    })
    setMessage('');

  }
  return (
    <div id="page-content-wrapper">
      <div className="container-fluid">
        <input placeholder="Username" id="username" value={username} onChange={(e) => { setUsername(e.target.value) }}>
        </input>
        <form id="form" onSubmit={submit}>

          <input placeholder="write a message" id="msginput" value={message} onChange={(e) => { setMessage(e.target.value) }} />
        </form>


        {

          messages.map((message, index) => {

            return <li key={index+1}>{message.username}: {message.message}</li>

          })
          
        }


      </div>
    </div>
  )
}

export default Content