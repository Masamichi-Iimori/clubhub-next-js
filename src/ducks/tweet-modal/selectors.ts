import { useSelector } from 'react-redux';
import { TweetModalState } from './slice';

export const useTweetModalState = () => {
  return useSelector((state: { tweetModal: TweetModalState }) => state);
};