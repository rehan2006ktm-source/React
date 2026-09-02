import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
    todos:[{
        id:1, 
        text:"Hello Rehan"
    }]
}

export const todoSlice=createSlice({
    name:"Todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=> {
               state.todos=state.todos.filter((todo)=>
                todo.id!==action.payload
            )}
        ,
     updateTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.todos.find((t) => t.id === id);
        if (todo) {
            todo.text = text; // Clean and accurate direct mutation
        }
        }
    }
})

export const {updateTodo,addTodo,removeTodo}=todoSlice.actions

export default  todoSlice.reducer
 