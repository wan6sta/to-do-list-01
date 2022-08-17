import TodoList, { TaskType } from './components/TodoList'

function App() {
	const tasks1: Array<TaskType> = [
		{ id: 1, title: 'Some task', isCompleted: false },
		{ id: 2, title: 'Yo', isCompleted: false },
		{ id: 3, title: 'Love TS', isCompleted: true },
		{ id: 4, title: 'Go go', isCompleted: false }
	]

	const tasks2: Array<TaskType> = [
		{ id: 1, title: 'Some task1', isCompleted: false },
		{ id: 2, title: 'Yo1', isCompleted: false },
		{ id: 3, title: 'Love TS1', isCompleted: false },
		{ id: 4, title: 'Go go1', isCompleted: true }
	]

	return (
		<div>
			<TodoList title={'Tasks 1'} tasks={tasks1} />
			<TodoList title={'Tasks 2'} tasks={tasks2} />
		</div>
	)
}

export default App
