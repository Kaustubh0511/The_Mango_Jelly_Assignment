import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';
import './ChatWindow.css';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-window">
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${msg.sender}: ${msg.content}`}
              secondary={new Date(msg.timestamp).toLocaleTimeString()}
            />
          </ListItem>
        ))}
        <div ref={chatEndRef} />
      </List>
    </div>
  );
};

export default ChatWindow;
