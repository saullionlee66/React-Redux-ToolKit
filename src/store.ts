import { useState, createContext, useContext } from "react";

export interface Todo {
	id: number;
	content: string;
	done: boolean;
}

export const updateTodo = (
	todos: Todo[],
	id: number,
	content: string
): Todo[] =>
	todos.map((todo) => ({
		...todo,
		content: todo.id === id ? content : todo.content,
	}));

export const toggleTodo = (todos: Todo[], id: number): Todo[] => {
	return todos.map((todo) => {
		return { ...todo, done: todo.id === id ? !todo.done : todo.done };
	});
};

export const removeTodo = (todos: Todo[], id: number): Todo[] => {
	return todos.filter((todo) => {
		return todo.id !== id;
	});
};

export const addTodo = (todos: Todo[], content: string): Todo[] => {
	return [
		...todos,
		{
			id: todos.length + 1,
			content,
			done: false,
		},
	];
};

export const useTodos = () => useState<Todo[]>([]);
export type useTodosType = ReturnType<typeof useTodos>;
export type TodosType = useTodosType[0];
export type SetTodosType = useTodosType[1];
