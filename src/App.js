import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from './redux/chatSlice';
import ChatInput from './components/ChatInput';
import ChatWindow from './components/ChatWindow';

// Mock responses for User 2
const mockResponses = [
  "That's interesting!",
  "I totally agree!",
  "Can you tell me more?",
  "Wow, that's amazing!",
  "Let's continue this later.",
  "Sure, I can help with that.",
  "Sounds good to me.",
  "I'll think about it and get back to you.",
];

const App = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const currentUser = useSelector((state) => state.chat.currentUser);
  const lastSender = useSelector((state) => state.chat.lastSender);

  useEffect(() => {
    // Simulate User 2 responding after User 1 sends a message
    const receiveMockMessage = () => {
      if (lastSender === currentUser) {  // User 1 just sent a message
        setTimeout(() => {
          const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
          dispatch(receiveMessage({ content: randomResponse, sender: 'User2' }));
        }, 3000);  // Simulate a 3-second delay before User 2 replies
      }
    };

    receiveMockMessage();
  }, [messages, dispatch, currentUser, lastSender]);

  return (
    <div>
      <ChatWindow />
      <ChatInput />
    </div>
  );
};

export default App;
