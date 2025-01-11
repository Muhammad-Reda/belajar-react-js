import { useState } from 'react';
import { useTasksDispatch } from './Context';

const Todo = ({ task }) => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(task.text);
    const dispatch = useTasksDispatch();

    const taskTextStyle = {
        width: '200px',
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
    };

    const handleClickEdit = () => {
        if (editing) {
            dispatch({
                type: 'edit',
                taskId: task.id,
                text,
            });
        }
        setEditing(!editing);
    };

    return (
        <div className="flex justify-between items-center p-4">
            <div className="flex gap-2 items-center">
                <input
                    type="checkbox"
                    name="done"
                    id="done"
                    onChange={(e) => {
                        dispatch({
                            type: 'done',
                            taskDone: e.target.checked,
                            taskId: task.id,
                        });
                    }}
                />
                <div style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                    {editing ? (
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    ) : task.done ? (
                        <del
                            className="p-4 text-green-500"
                            style={taskTextStyle}
                        >
                            {task.text}
                        </del>
                    ) : (
                        <p className="p-4" style={taskTextStyle}>
                            {task.text}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex gap-2">
                {!task.done && (
                    <button onClick={handleClickEdit}>
                        {editing ? 'Save' : 'Edit'}
                    </button>
                )}
                <button
                    onClick={() =>
                        dispatch({ type: 'delete', taskId: task.id })
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
