import React from "react";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import {thunk} from "redux-thunk";


const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = 'task/fetch';

const initialState = {
  task: [],
};

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        return {
          ...state,
          task: [...state.task, action.payload], // Fix array spread issue here too
        };
  
      case DELETE_TASK:
        return {
          ...state,
          task: state.task.filter((_, index) => index !== action.payload),
        };
  
      case FETCH_TASK:
        return {
          ...state,
          task: [...state.task, ...action.payload], // Fixed to correctly merge tasks
        };
  
      default:
        return state;
    }
  };

// Step 2: Create the Redux store using the reducer
export const store = createStore(
  TaskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
console.log(store);

// Step 3: Log the initial state
console.log("initial state :", store.getState());

// Step 4: Dispatch an action to add a task

// store.dispatch({
//   type: ADD_TASK,
//   payload: "buy mango",
// });
// store.dispatch({
//     type: ADD_TASK,
//     payload: "buy oranges",
//   });
//   store.dispatch({
//     type: ADD_TASK,
//     payload: "buy watermelon",
//   });

// Step 5: Create action creators (Move this **above** the calls)
export const addTask = (data) => {
  return {
    type: ADD_TASK,
    payload: data,
  };
};

// Now call `addTask` after it's defined
// store.dispatch(addTask("buy bananas"));
// console.log("updated state ", store.getState());

// store.dispatch(addTask("buy grapes"));
// console.log("updated state ", store.getState());

// store.dispatch(addTask("buy samosa"));
// console.log("updated state ", store.getState());

// similarly delete by action creater
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
// similarly delete by action creater

// store.dispatch(deleteTask(1));
// console.log("updated state after delete by action creator ", store.getState());

//this is delete by individual method

// store.dispatch({
//   type: DELETE_TASK,
//   payload: 0,
// });
// console.log("updated state after  delete ", store.getState());
export const fetchTask = () => {
    return async (dispatch) => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=3" // Fixed URL
        );
        const task = await res.json();
        console.log(task);
        console.log("title : ", task.map((currTask) => currTask.title));
  
        dispatch({
          type: FETCH_TASK,
          payload: task.map((currTask) => ({
            id: currTask.id, // Ensure each task has an `id`
            name: currTask.title, // Ensure property name is `name` for consistency
          })),
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  