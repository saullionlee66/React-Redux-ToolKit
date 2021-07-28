import React from "react";
import { removeTodo, toggleTodo, updateTodo } from "../store";
import { useTodosContext } from "../Helpers/todoContext";
import {
	VStack,
	HStack,
	Input,
	IconButton,
	StackDivider,
	Spacer,
	Checkbox,
	Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

function TodoList() {
	const [todos, setTodos] = useTodosContext();
	if (!todos.length) {
		return (
			<Badge
				p='5'
				borderRadius='lg'
				fontSize='26'
				variant='solid'
				colorScheme='green'>
				You can add Todos now!
			</Badge>
		);
	}
	return (
		<VStack
			mt='8'
			divider={<StackDivider />}
			borderColor='gray.200'
			borderWidth='2px'
			borderRadius='lg'
			p='4'
			w='100%'
			maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
			alignItems='stretch'>
			{todos.map((todo) => (
				<HStack key={todo.id}>
					<Checkbox
						size='lg'
						checked={todo.done}
						onClick={() => setTodos(() => toggleTodo(todos, todo.id))}
					/>
					<Input
						size='lg'
						variant='unstyled'
						onChange={(e) =>
							setTodos(() => updateTodo(todos, todo.id, e.target.value))
						}
						value={todo.content}
					/>
					<Spacer />
					<IconButton
						aria-label='Delete Sign'
						icon={<FaTrash />}
						isRound={true}
						size='lg'
						onClick={() => {
							setTodos(() => removeTodo(todos, todo.id));
						}}
					/>
				</HStack>
			))}
		</VStack>
	);
}

export default TodoList;
