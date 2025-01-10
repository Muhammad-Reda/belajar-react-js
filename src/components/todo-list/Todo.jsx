import { useState } from 'react';
import { useTodosDispatch } from './TodoContext';

const Todo = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const dispatch = useTodosDispatch();

    const handleSaveEdited = () => {
        setIsEditing(!isEditing);
        if (isEditing) {
            dispatch({
                type: 'editTask',
                taskId: task.id,
                text,
            });
        }
    };

    return (
        <>
            <div className=" flex gap-2">
                <input
                    type="checkbox"
                    onChange={(e) =>
                        dispatch({
                            type: 'finishTask',
                            taskId: task.id,
                            done: e.target.checked,
                        })
                    }
                />
                {isEditing ? (
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : task.done ? (
                    <del>{task.text}</del>
                ) : (
                    <p>{task.text}</p>
                )}
                {!task.done && (
                    <div className="flex gap-2 p-2">
                        <button type="button" onClick={handleSaveEdited}>
                            {isEditing ? 'Save' : 'Edit'}
                        </button>
                        <button
                            type="button"
                            onClick={() =>
                                dispatch({
                                    type: 'deleteTask',
                                    taskId: task.id,
                                })
                            }
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Todo;
