import { createSlice } from '@reduxjs/toolkit';

export interface filterSliceState {
  activeMemory: Array<number>;
  activeRam: Array<number>;
  activeBrand: Array<number>;
}

const initialState: filterSliceState = {
  activeMemory: [],
  activeRam: [],
  activeBrand: [],
};

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    addMemory: (state, action) => {
      if (state.activeMemory.includes(action.payload)) {
        state.activeMemory = state.activeMemory.filter((value) => value !== action.payload);
        return;
      }
      state.activeMemory = state.activeMemory.concat(action.payload);
    },
    addRam: ((state, action) => {
      if (state.activeRam.includes(action.payload)) {
        state.activeRam = state.activeRam.filter((value) => value !== action.payload);
        return;
      }
      state.activeRam = state.activeRam.concat(action.payload);
    }),
    addBrand: ((state, action) => {
      if (state.activeBrand.includes(action.payload)) {
        state.activeBrand = state.activeBrand.filter((value) => value !== action.payload);
        return;
      }
      state.activeBrand = state.activeBrand.concat(action.payload);
    })
  }
});

export const { addMemory, addRam, addBrand } = filterSlice.actions;

export default filterSlice.reducer;
