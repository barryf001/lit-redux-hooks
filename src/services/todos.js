import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: []}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.value.push(action.payload)
    }
  },
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer