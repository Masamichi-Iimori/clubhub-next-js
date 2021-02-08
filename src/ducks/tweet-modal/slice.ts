import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TweetModalState = {
  open: boolean,
  positions: string,
  formation: string,
  activeFrequency: string,
  activeStartTime: string,
  activeEndTime: string,
  voiceChat: string,
  freeComment: string,
};

export const initialState: TweetModalState = {
  open: false,
  positions: '',
  formation: '',
  activeFrequency: '',
  activeStartTime: '',
  activeEndTime: '',
  voiceChat: '',
  freeComment: '',
};

export const tweetModalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    openModal: (state, _action: PayloadAction<{}>) => ({
      ...state,
      open: true
    }),
    closeModal: (state, _action: PayloadAction<{}>) => ({
      ...state,
      open: false
    }),
    updatePositions: (state, action: PayloadAction<string>) => ({
      ...state,
      positions: action.payload
    }),
    updateFormation: (state, action: PayloadAction<string>) => ({
      ...state,
      formation: action.payload
    }),
    updateActiveFrequency: (state, action: PayloadAction<string>) => ({
      ...state,
      activeFrequency: action.payload
    }),
    updateActiveStartTime: (state, action: PayloadAction<string>) => ({
      ...state,
      activeStartTime: action.payload
    }),
    updateActiveEndTime: (state, action: PayloadAction<string>) => ({
      ...state,
      activeEndTime: action.payload
    }),
    updateVoiceChat: (state, action: PayloadAction<string>) => ({
      ...state,
      voiceChat: action.payload
    }),
    updateFreeComment: (state, action: PayloadAction<string>) => ({
      ...state,
      freeComment: action.payload
    }),
  },
});

export default tweetModalSlice;