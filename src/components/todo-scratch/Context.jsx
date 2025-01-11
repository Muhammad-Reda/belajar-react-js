import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);
const TaskDispatchContext = createContext(null);

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TasksContext.Provider>
    );
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.text,
                    done: false,
                },
            ];
        case 'edit':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        text: action.text,
                    };
                }
                return task;
            });
        case 'delete':
            return state.filter((task) => task.id !== action.taskId);

        case 'done':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        done: action.taskDone,
                    };
                }
                return task;
            });
        default:
            throw new Error('No case matching');
    }
};

const useTasks = () => {
    return useContext(TasksContext);
};

const useTasksDispatch = () => {
    return useContext(TaskDispatchContext);
};

const initialTasks = [
    {
        id: 0,
        text: 'Ngoding',
        done: false,
    },
    {
        id: 1,
        text: 'Skripsi',
        done: false,
    },
];

export { TaskProvider, useTasks, useTasksDispatch };
