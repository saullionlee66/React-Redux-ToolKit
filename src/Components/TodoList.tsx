import { useSelector, useDispatch } from "react-redux";
import { selectTodos } from "../Store/store";
import { toggleTodo, updateTodo, deleteTodo, Todo } from "../Store/todoSlice";
import {
	VStack,
	HStack,
	Input,
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
import { FaTrash, FaToggleOff } from "react-icons/fa";
import React from "react";
function TodoList() {
	const todos = useSelector(selectTodos);

	const dispatch = useDispatch();

	const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
		const newtodo = {
			id: id,
			content: e.target.value,
			done: false,
		};
		dispatch(updateTodo(newtodo));
	};
	if (todos.every((todo: Todo) => todo.done === true)) {
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
			{todos
				.filter((todo) => todo.done === false)
				.map((todo) => (
					<HStack key={todo.id}>
						<Input
							size='lg'
							variant='unstyled'
							onChange={(e) => handleUpdate(e, todo.id)}
							value={todo.content}
						/>
						<Spacer />
						<Tooltip
							placement='auto-start'
							hasArrow
							label='Finished'
							borderRadius='lg'
							bg='gray.400'
							fontSize='lx'>
							<IconButton
								aria-label='done Sign'
								icon={<FaToggleOff />}
								isRound={true}
								size='lg'
								onClick={() => dispatch(toggleTodo(todo.id))}
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
											onClick={() => dispatch(deleteTodo(todo.id))}>
											Delete
										</Button>
									</PopoverBody>
								</PopoverContent>
							</Portal>
						</Popover>
					</HStack>
				))}
		</VStack>
	);
}

export default TodoList;
