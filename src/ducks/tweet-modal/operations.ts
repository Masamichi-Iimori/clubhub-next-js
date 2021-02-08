import { Dispatch } from '@reduxjs/toolkit';
import tweetModalSlice from './slice';


export const tweetModalOperations = {
  openModal: () => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.openModal({}));
  },
  closeModal: () => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.closeModal({}));
  },
  updatePositions: (positions: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updatePositions(positions));
  },
  updateFormation: (formation: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateFormation(formation));
  },
  updateActiveFrequency: (activeFrequency: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateActiveFrequency(activeFrequency));
  },
  updateActiveStartTime: (activeStartTime: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateActiveStartTime(activeStartTime));
  },
  updateActiveEndTime: (activeEndTime: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateActiveEndTime(activeEndTime));
  },
  updateVoiceChat: (voiceChat: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateVoiceChat(voiceChat));
  },
  updateFreeComment: (freeComment: string) => (dispatch: Dispatch<any>) => {
    dispatch(tweetModalSlice.actions.updateFreeComment(freeComment));
  },
};
