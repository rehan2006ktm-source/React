import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todo/todoSlice.js'

const store =configureStore({
    reducer:todoReducer
})
export {store}