import { useTodos } from './TodoContext';
import TodoInput from './TodoInput';
import Todo from './Todo';

const TodoList = () => {
    const tasks = useTodos();

    const organizeTasksByCompletion = (taskList) => {
        const complete = taskList.filter((task) => task.done);
        const incomplete = taskList.filter((task) => !task.done);

        return [...incomplete, ...complete];
    };

    const organizedTasks = organizeTasksByCompletion(tasks);

    return (
        <>
            <TodoInput />
            <ul>
                {organizedTasks.map((task) => (
                    <li key={task.id}>
                        <Todo task={task} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
