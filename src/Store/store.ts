import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./todoSlice";

export const store = configureStore({
	reducer: {
		todos: todosSlice.reducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;
