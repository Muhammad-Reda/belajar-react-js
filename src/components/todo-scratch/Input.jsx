import { useTasksDispatch } from './Context';
import { useState } from 'react';
import { flushSync } from 'react-dom';

const Input = ({ refCallback }) => {
    const [text, setText] = useState('');

    const dispatch = useTasksDispatch();

    return (
        <>
            <div className="flex gap-4 p-4">
                <input
                    type="text"
                    name="input"
                    id="input"
                    className="p-2 rounded-md "
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <button
                    type="button"
                    onClick={() => {
                        if (text.length <= 0) {
                            return alert('Please enter the task');
                        }
                        flushSync(() => {
                            setText('');
                            dispatch({
                                type: 'add',
                                text,
                            });
                        });
                        refCallback('lastChild');
                    }}
                >
                    Save
                </button>
            </div>
        </>
    );
};

export default Input;
