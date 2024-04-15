import userSlice from "./slice";
export const userSliceReducer = userSlice.reducer;
export const { setIsLoggedIn, setUserMeta, setToken } = userSlice.actions;
export const selectToken = (state: any) => state.user.token;
export const selectIsLoggedIn = (state: any) => state.user.isLoggedIn;
export const selectUserMeta = (state: any) => state.user.userMeta;
