import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 10, magnify: 1}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    incrementMagnifier(state){
      state.magnify++
    }
  },
})

export const { increment, decrement, incrementMagnifier, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer