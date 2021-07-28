import React from "react";
import { useTodosContext } from "../Helpers/todoContext";
import { removeTodo, toggleTodo } from "../store";
import {
	VStack,
	HStack,
	Text,
	IconButton,
	StackDivider,
	Spacer,
	Badge,
	Popover,
	Button,
	PopoverBody,
	PopoverCloseButton,
	PopoverHeader,
	PopoverContent,
	PopoverArrow,
	PopoverTrigger,
	Portal,
	Tooltip,
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
							<Text as='s'>{todo.content}</Text>
							<Spacer />
							<Tooltip
								hasArrow
								label='Not Finished'
								bg='gray.300'
								borderRadius='lg'
								fontSize='lx'>
								<IconButton
									aria-label='done Sign'
									icon={<FaToggleOn />}
									isRound={true}
									size='lg'
									onClick={() => setTodos(() => toggleTodo(todos, todo.id))}
								/>
							</Tooltip>

							<Popover placement='right-end'>
								<PopoverTrigger>
									<IconButton
										aria-label='Delete Sign'
										icon={<FaTrash />}
										isRound={true}
										size='lg'
									/>
								</PopoverTrigger>
								<Portal>
									<PopoverContent>
										<PopoverArrow />
										<PopoverHeader>Are you sure?</PopoverHeader>
										<PopoverCloseButton />
										<PopoverBody>
											<Button
												colorScheme='blue'
												onClick={() => {
													setTodos(() => removeTodo(todos, todo.id));
												}}>
												Delete
											</Button>
										</PopoverBody>
									</PopoverContent>
								</Portal>
							</Popover>
						</HStack>
					);
				}
				return null;
			})}
		</VStack>
	);
}

export default DoneList;
