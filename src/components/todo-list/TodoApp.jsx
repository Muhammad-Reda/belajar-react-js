import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';

const TodoApp = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
};

export default TodoApp;
