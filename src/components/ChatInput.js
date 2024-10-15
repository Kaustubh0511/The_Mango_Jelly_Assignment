import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../redux/chatSlice';
import { Button, TextField } from '@mui/material';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage({ content: message }));
      setMessage('');
    }
  };

  return (
    <div>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default ChatInput;
