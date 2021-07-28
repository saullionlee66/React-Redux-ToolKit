import React from "react";
import { useTodosContext } from "../Helpers/todoContext";
import { updateTodo, removeTodo, toggleTodo } from "../store";
import {
	VStack,
	HStack,
	Input,
	IconButton,
	StackDivider,
	Spacer,
	Badge,
} from "@chakra-ui/react";

import { FaTrash, FaToggleOn } from "react-icons/fa";

function DoneList() {
	const [todos, setTodos] = useTodosContext();
	if (todos.every((todo) => todo.done === false)) {
		return (
			<Badge
				p='5'
				borderRadius='lg'
				fontSize='26'
				variant='solid'
				colorScheme='green'>
				Finish your Todos!
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
			{todos.map((todo) => {
				if (todo.done) {
					return (
						<HStack key={todo.id}>
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
								aria-label='done Sign'
								icon={<FaToggleOn />}
								isRound={true}
								size='lg'
								onClick={() => setTodos(() => toggleTodo(todos, todo.id))}
							/>

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
					);
				}
				return null;
			})}
		</VStack>
	);
}

export default DoneList;