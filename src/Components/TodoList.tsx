import { removeTodo, toggleTodo, updateTodo } from "../store";
import { useTodosContext } from "../Helpers/todoContext";
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
function TodoList() {
	const [todos, setTodos] = useTodosContext();
	console.log(todos);

	if (todos.every((todo) => todo.done === true)) {
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
							onChange={(e) =>
								setTodos(() => updateTodo(todos, todo.id, e.target.value))
							}
							value={todo.content}
						/>
						<Spacer />
						<Tooltip
							hasArrow
							label='Finished'
							borderRadius='lg'
							bg='gray.300'
							fontSize='lx'>
							<IconButton
								aria-label='done Sign'
								icon={<FaToggleOff />}
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
				))}
		</VStack>
	);
}

export default TodoList;
