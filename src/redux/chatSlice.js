// redux/chatSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: 'User1', // Mocked current user
  lastSender: 'User2',  // Initial last sender so User1 can start
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString(),
        sender: state.currentUser,
      });
      state.lastSender = state.currentUser;  // Update lastSender to current user
    },
    receiveMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
      state.lastSender = 'User2';  // Update lastSender to User 2
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
