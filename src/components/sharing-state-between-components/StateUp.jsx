import Input from './Input';
import { useState } from 'react';

const StateUp = () => {
    const [text, setText] = useState('');

    return (
        <>
            <Input
                label="First"
                onChange={(e) => setText(e.target.value)}
                text={text}
            />
            <Input
                label="Second"
                onChange={(e) => setText(e.target.value)}
                text={text}
            />
        </>
    );
};

export default StateUp;
