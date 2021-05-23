import './App.css';
import React, { useState, useEffect } from 'react'
import { Input, FormControl, Card } from '@material-ui/core';
import Message from './Message'
import db from './Firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input, setinput] = useState('');
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState('');
  // const [welcome, setwelcome] = useState({txt:`Welcome: ${username}`});
  const image = {
    height: '100px',
    width: '100px'
  }

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setmessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })
      ))
    })
  }, [])

  useEffect(() => {
    setusername(prompt("Please enter your name"))
  }, []);


  const sendMessage = (event) => {
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    event.preventDefault();
    // scrollToBottom()
    setinput([])
  }


  return (
    <div className="App">
      <img alt="facebook" src="https://lh3.googleusercontent.com/proxy/e7sdP-VCRPmyJ0ffKj4wU2Sn7R3fNO-WP2zwKV0vR-c6yoAgzjwAiu79eJUGpOpomhCpadR6W0GCGGAmiKnyF5_5ZyQ6yKoDaPARetfqX78M2gwcMgy9hbzZIYbjuvpOaNwUdp-WAp4LtQhGzSHN3Z6vYENl" style={image} />
      <h3>Messenger-lite</h3>
      <p>{`Welcome: ${username}`}</p>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="Enter a message..." value={input} onChange={(event) => { setinput(event.target.value) }} />
          <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>
      </form>
      <Card className="app_card">
        <FlipMove>
          {messages.map(({ id, message }) => {
            return <Message key={id} username={username} message={message} />
          })}
        </FlipMove>
      </Card>
    </div>
  );
}

export default App;
