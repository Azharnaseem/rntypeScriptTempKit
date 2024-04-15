import configSlice from "./slice";
export const configSliceReducer = configSlice.reducer;
export const { setAppLoader } = configSlice.actions;
export const selectLoader = (state: any) => state.config.appLoader;
