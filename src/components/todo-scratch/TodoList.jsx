import Todo from './Todo';
import Input from './Input';
import { useTasks } from './Context';

const TodoList = () => {
    const tasks = useTasks();

    const organizeTasks = (tasks) => {
        const incomplete = tasks.filter((task) => !task.done);
        const complete = tasks.filter((task) => task.done);

        return [...incomplete, ...complete];
    };

    const organizedTasksList = organizeTasks(tasks);

    return (
        <div className="flex flex-col justify-center items-center pt-8 p-4">
            <Input />
            <ul>
                {organizedTasksList.map((task, i) => (
                    <li key={task.id} className="flex gap-2">
                        <p className="p-8">{i + 1}</p>
                        <Todo task={task} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
