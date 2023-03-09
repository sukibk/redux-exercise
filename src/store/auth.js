import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialStateAuth = {isLoggedIn: false}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
})


export const authActions = authSlice.actions
export default authSlice.reducer;