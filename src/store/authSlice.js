import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    isAuthenticate: false,
    isLoading: false,
    error: null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers:{
        loginRequest: (state)=>{
            state.isLoading = true
            state.error = null
        },
        loginSuccess: (state)=>{
            state.isAuthenticate = true
            state.isLoading = false
            state.user = action.payload
        },
        loginFailure: (state)=>{
            state.error = action.payload
            state.isLoading = false
            state.isAuthenticate = false
        },
        logout: (state)=>{
            state.user = null
        }
    }
})

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer