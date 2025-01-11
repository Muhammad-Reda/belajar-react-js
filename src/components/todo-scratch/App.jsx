import TodoList from './TodoList';
import { TaskProvider } from './Context';

const App = () => {
    return (
        <TaskProvider>
            <TodoList />
        </TaskProvider>
    );
};

export default App;
