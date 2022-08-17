export type TaskType = {
	id: number
	title: string
	isCompleted: boolean
}

type TodoListProps = {
	title: string
	tasks: Array<TaskType>
}

const TodoList = ({ title, tasks }: TodoListProps) => {
	return (
		<div>
			<h3>{title}</h3>
			<ul>
				{tasks.map(task => (
					<li key={task.id}>
						<span>{task.title}</span>
						<input checked={task.isCompleted} type='checkbox' />
					</li>
				))}
			</ul>
		</div>
	)
}

export default TodoList
