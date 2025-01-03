import { useState } from 'react';

const Field = ({ label }) => {
    const [text, setText] = useState('');

    return (
        <>
            <label htmlFor="input">
                {label}:{' '}
                <input
                    type="text"
                    value={text}
                    placeholder={label}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
        </>
    );
};

export default Field;
