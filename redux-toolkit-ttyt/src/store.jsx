import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";

// Async Thunk for fetching tasks
export const fetchTask = createAsyncThunk("task/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
  const data = await res.json();
  return data.map((task) => ({ id: task.id, name: task.title }));
});


// step 2: create slice and reducer 
// Task Slice
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

//step 3: action creater 
export const { addTask, deleteTask } = taskSlice.actions;


//  step 1:
// Configure Store
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});
