import { useState } from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';
import { LoadGame } from './LoadGame';
import { Game } from './Game';

export default function App() {
  const [messages, setMessages] = useState([]);
  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <Game />
      {/* <LoadGame /> */}
    </>
  );
}