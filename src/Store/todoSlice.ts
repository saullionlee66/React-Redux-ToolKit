import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	content: string;
	done: boolean;
}

interface TodosSliceState {
	todos: Todo[];
}

const initialState: TodosSliceState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			state.todos = [
				...state.todos,
				{
					id: state.todos.length,
					content: action.payload,
					done: false,
				},
			];
		},
		updateTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return (todo.content = action.payload.content);
				}
				return todo;
			});
		},
		toggleTodo: (state, action: PayloadAction<number>) => {
			state.todos.filter((todo) => {
				if (todo.id === action.payload) {
					return (todo.done = !todo.done);
				}
				return todo;
			});
		},
		deleteTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { deleteTodo, updateTodo, addTodo, toggleTodo } =
	todosSlice.actions;

export default todosSlice.reducer;
