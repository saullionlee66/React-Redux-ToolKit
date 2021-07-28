import { createContext, useContext } from "react";
import { useTodosType, useTodos } from "../store";

const TodosContext = createContext<useTodosType | null>(null);

export const useTodosContext = () => useContext(TodosContext)!;

export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
	const value = useTodos();
	return (
		<TodosContext.Provider value={value}>{children}</TodosContext.Provider>
	);
};
