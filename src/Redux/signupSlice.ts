import { createSlice } from "@reduxjs/toolkit";

interface userProps {
  name: string;
  email: string;
  password: string;
}

const signupSlice = createSlice({
  name: "signup",
    initialState: {
        user: [] as userProps[],
    },
    reducers: {
        setUserCredentials: (state, action: { payload: userProps }) => {
            const user = action.payload;
            state.user.push(user);
            sessionStorage.setItem("user", JSON.stringify(user));
        },
        clearUserCredentials: (state) => {
            state.user = [];
            sessionStorage.removeItem("user");
        }
    }
});
export const { setUserCredentials, clearUserCredentials } = signupSlice.actions;
export default signupSlice.reducer;