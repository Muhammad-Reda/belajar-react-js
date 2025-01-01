import { useImmer } from 'use-immer';
import { useState } from 'react';

function States() {
    const [fullName, setFullName] = useImmer({
        firstName: 'Muhammad',
        lastName: 'Redha',
    });
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(!status);
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <p>
                        First name:{' '}
                        {status ? (
                            <input
                                value={fullName.firstName}
                                onChange={(e) =>
                                    setFullName((draft) => {
                                        draft.firstName = e.target.value;
                                    })
                                }
                            />
                        ) : (
                            <b>{fullName.firstName}</b>
                        )}
                    </p>
                </label>
                <label>
                    <p>
                        Last name:{' '}
                        {status ? (
                            <input
                                value={fullName.lastName}
                                onChange={(e) => {
                                    setFullName((draft) => {
                                        draft.lastName = e.target.value;
                                    });
                                }}
                            />
                        ) : (
                            <b>{fullName.lastName}</b>
                        )}
                    </p>
                </label>
                <button type="submit">
                    {status ? 'Save' : 'Edit Profile'}
                </button>
                <p>
                    <i>
                        Hello, {fullName.firstName} {fullName.lastName}!
                    </i>
                </p>
            </form>
        </>
    );
}

export default States;
