import { useTodosDispatch } from './TodoContext';
import { useState } from 'react';

const TodoInput = () => {
    const [text, setText] = useState('');

    const dispatch = useTodosDispatch();
    const handleAddTask = () => {
        if (text.trim() === '') {
            return alert('Please enter a task');
        }
        dispatch({ type: 'addTask', text });
        setText('');
    };

    return (
        <>
            <div className=" flex gap-2">
                <input
                    type="text"
                    name="todo-input"
                    id="todo-input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="button" onClick={handleAddTask}>
                    Save
                </button>
            </div>
        </>
    );
};

export default TodoInput;
