import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import { VStack, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { TodosProvider } from "./Helpers/todoContext";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<TodosProvider>
			<VStack p={6}>
				<IconButton
					aria-label='Change Color Mode'
					icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
					isRound={true}
					size='lg'
					alignSelf='flex-end'
					onClick={toggleColorMode}
				/>
				<Heading
					fontWeight='extrabold'
					bgGradient='linear(to-r, yellow.500, yellow.300, green.500)'
					bgClip='text'
					size='2xl'>
					Todo Application
				</Heading>
				<TodoList />
				<AddTodo />
			</VStack>
		</TodosProvider>
	);
}

export default App;
