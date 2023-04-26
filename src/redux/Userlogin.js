import { createSlice } from '@reduxjs/toolkit'

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");


const initialState = {
    user: user !== "undefined" ? JSON.parse(user) : null,
    token: token !== "undefined" ? token : null,
}

export const userSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        storeUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(state.user));
            return state;
        },
        storeToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", (state.token));

            return state;
        },
        logOut: (state) => {
            state.user = null
            state.token = null
            localStorage.removeItem("user");
            localStorage.removeItem("token");

        }

    },
})

// Action creators are generated for each case reducer function
export const { storeUser, storeToken, logOut } = userSlice.actions

export default userSlice.reducer