// name, initial state, reducers, actions for todo feature

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoReducer = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {

  }
});

export default todoReducer;