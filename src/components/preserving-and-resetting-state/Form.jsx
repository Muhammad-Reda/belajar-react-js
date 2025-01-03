import { useState } from 'react';

const Form = () => {
    const [text, setText] = useState('');

    return (
        <>
            <textarea
                name="textArea"
                id="textArea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </>
    );
};

export default Form;
