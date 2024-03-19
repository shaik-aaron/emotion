import {Slice, createSlice} from '@reduxjs/toolkit';

type Emotion = {
  emotion: {
    feeling: string;
    describing: string[];
    reason: string;
  };
};

const initialState: Emotion = {
  emotion: {
    feeling: '',
    describing: [],
    reason: '',
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
  },
});

export default emotionSlice.reducer;
export const {feelingType, descriptors, reason} = emotionSlice.actions;
