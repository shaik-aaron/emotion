import {Slice, createSlice} from '@reduxjs/toolkit';
import {activities} from '../constants/activities';

type Emotion = {
  emotion: {
    feeling: string;
    describing: string[];
    reason: string;
    activities: string[];
  };
};

const initialState: Emotion = {
  emotion: {
    feeling: '',
    describing: [],
    reason: '',
    activities: [],
  },
};

const emotionSlice: Slice = createSlice({
  name: 'emotion',
  initialState,
  reducers: {
    feelingType: (state, action) => {
      state.emotion = {...state.emotion, feeling: action.payload};
    },
    descriptors: (state, action) => {
      state.emotion = {...state.emotion, describing: action.payload};
    },
    reason: (state, action) => {
      state.emotion = {...state.emotion, reason: action.payload};
    },
    saveActivities: (state, action) => {
      state.emotion = {...state.emotion, activities: action.payload};
    },
  },
});

export default emotionSlice.reducer;
export const {feelingType, descriptors, reason, saveActivities} =
  emotionSlice.actions;
