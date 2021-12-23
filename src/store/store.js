import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../services/counter';
import todosReducer from '../services/todos';


export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
})