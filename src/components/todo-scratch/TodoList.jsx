import Todo from './Todo';
import Input from './Input';
import { useTasks } from './Context';
import { useRef } from 'react';

const TodoList = () => {
    const tasks = useTasks();
    const childRef = useRef(null);

    const organizeTasks = (tasks) => {
        const incomplete = tasks.filter((task) => !task.done);
        const complete = tasks.filter((task) => task.done);

        return [...incomplete, ...complete];
    };

    const organizedTasksList = organizeTasks(tasks);

    const scrollToChild = (child) => {
        const map = getMap();
        map[child].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
    };

    const getMap = () => {
        if (!childRef.current) {
            childRef.current = new Map();
        }
        return childRef.current;
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center pt-8 p-4 relative">
                <Input refCallback={scrollToChild} />
                <ul ref={childRef}>
                    {organizedTasksList.map((task, i) => (
                        <li key={task.id} className="flex gap-2">
                            <p className="p-8">{i + 1}</p>
                            <Todo task={task} />
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => scrollToChild('firstChild')}
                    className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default TodoList;
