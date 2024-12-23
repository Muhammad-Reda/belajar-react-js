import { useState } from 'react';

const Queue = () => {
    const [number, setNumber] = useState(0);

    return (
        <>
            <p>{number}</p>
            <button
                type="button"
                onClick={() => {
                    setNumber(number + 5);
                    setNumber(42);
                    setNumber((n) => n + 1);
                }}
            >
                Increase the number
            </button>
        </>
    );
};

export default Queue;
