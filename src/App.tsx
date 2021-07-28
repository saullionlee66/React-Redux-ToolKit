import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { VStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { TodosProvider } from "./Helpers/todoContext";
import DoneList from "./Components/DoneList";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<TodosProvider>
			<VStack p={4}>
				<IconButton
					aria-label='Change Color Mode'
					icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
					isRound={true}
					size='lg'
					alignSelf='flex-end'
					onClick={toggleColorMode}
					mb='10'
				/>
				<Heading
					p='8'
					fontWeight='extrabold'
					bgGradient='linear(to-r, yellow.500, yellow.300, green.500)'
					bgClip='text'
					size='2xl'>
					Todo Application
				</Heading>
				<TodoList />
				<AddTodo />
				<Heading p='8' fontWeight='bold' color='yellow.500' size='xl'>
					Done List
				</Heading>
				<DoneList />
			</VStack>
		</TodosProvider>
	);
}

export default App;
