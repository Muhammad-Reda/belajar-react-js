import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { initialTasks } from '@/lib/data';

export const todoContext = createContext(null);
export const todoDispatchContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, initialTasks);

    return (
        <todoContext.Provider value={todos}>
            <todoDispatchContext.Provider value={dispatch}>
                {children}
            </todoDispatchContext.Provider>
        </todoContext.Provider>
    );
};

export const useTodos = () => {
    return useContext(todoContext);
};

export const useTodosDispatch = () => {
    return useContext(todoDispatchContext);
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'addTask':
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.text,
                    done: false,
                },
            ];
        case 'editTask':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        text: action.text,
                    };
                }
                return task;
            });
        case 'finishTask':
            return state.map((task) => {
                if (task.id === action.taskId) {
                    return {
                        ...task,
                        done: !task.done,
                    };
                }
                return task;
            });
        case 'deleteTask':
            return state.filter((task) => task.id !== action.taskId);
        default:
            return state;
    }
};
