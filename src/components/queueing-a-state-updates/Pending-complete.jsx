import { useState } from 'react';

const Pending = () => {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    const handleClickBuy = async () => {
        setPending((n) => n + 1);
        await delay(3000);
        setPending((n) => n - 1);
        setCompleted((n) => n + 1);
    };

    function delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    return (
        <>
            <button type="button" onClick={handleClickBuy}>
                Buy
            </button>
            <p>Pending: {pending}</p>
            <p>Completed: {completed}</p>
        </>
    );
};

export default Pending;
