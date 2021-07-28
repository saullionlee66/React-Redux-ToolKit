import React from "react";
import { createContext, useContext } from "react";
import { useTodosType, useTodos } from "../store";

// const initialTodos: useTodosType = JSON.parse(
// 	localStorage.getItem("todos") as string
// );

// const initialTodos: Todo[] | null =
// 	JSON.parse(localStorage.getItem("todos") as string) || null;
// interface Todo {
// 	id: number;
// 	content: string;
// 	done: boolean;
// }

// interface TodoContext {
// 	todo: Todo;
// 	dispatch: React.Dispatch<any>;
// }
const TodosContext = createContext<useTodosType | null>(null);
//const TodosContext: Context<TodoContext> = createContext({} as TodoContext);

export const useTodosContext = () => useContext(TodosContext)!;

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
	const value = useTodos();
	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
};
