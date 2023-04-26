import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Userlogin'

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})