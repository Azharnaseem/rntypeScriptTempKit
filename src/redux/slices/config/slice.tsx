import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appLoader:false
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setAppLoader: (state, action) => {
      state.appLoader = action.payload
  },
  },
});

export default configSlice;