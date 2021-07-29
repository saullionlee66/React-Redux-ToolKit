import React, { useState, useEffect } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { addTodo } from "../Store/todoSlice";
import { selectTodos } from "../Store/store";
import { useSelector, useDispatch } from "react-redux";
function AddTodo() {
	const todos = useSelector(selectTodos);
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState<string>("");
	const toast = useToast();
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		if (!newTodo) {
			toast({
				title: "Please add content!",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
			return;
		}
		dispatch(addTodo(newTodo));
		setNewTodo("");
	}
	return (
		<form onSubmit={handleSubmit}>
			<HStack mt='10'>
				<Input
					variant='filled'
					placeholder='Enter todo here...'
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<Button colorScheme='yellow' px='8' type='submit'>
					Add Todo
				</Button>
			</HStack>
		</form>
	);
}
export default AddTodo;
