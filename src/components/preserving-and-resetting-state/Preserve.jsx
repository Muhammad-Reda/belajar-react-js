import { useState } from 'react';
import Form from './Form';

const Preserve = () => {
    const [hint, setHint] = useState(false);

    return (
        <div>
            {hint && (
                <p>
                    <i>Hint: Your favorite City?</i>
                </p>
            )}
            <Form />
            <button onClick={() => setHint(!hint)}>
                {hint ? 'Hide hint' : 'Show hint'}
            </button>
        </div>
    );
};

export default Preserve;
