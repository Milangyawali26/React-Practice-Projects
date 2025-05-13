import { createSlice } from "@reduxjs/toolkit";
import { fetchTask } from "../../store";

const taskSlice = createSlice({
    name: "task",
    initialState: { tasks: [] },
    reducers: {
      addTask: (state, action) => {
        state.tasks.push(action.payload);
      },
      deleteTask: (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
      });
    },
  });