import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        user: {},
        error: null
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setCurrentUser, setError } = authSlice.actions;
export default authSlice.reducer;
