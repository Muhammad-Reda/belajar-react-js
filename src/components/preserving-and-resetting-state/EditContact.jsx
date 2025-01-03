import { useState } from 'react';

export default function EditContact({ Data, onSave }) {
    const [name, setName] = useState(Data.name);
    const [email, setEmail] = useState(Data.email);
    console.log('Name: ', name);
    console.log('Email: ', email);

    return (
        <section>
            <label>
                Name:{' '}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email:{' '}
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <button
                onClick={() => {
                    const updatedData = {
                        id: Data.id,
                        name: name,
                        email: email,
                    };
                    onSave(updatedData);
                }}
            >
                Save
            </button>
            <button
                onClick={() => {
                    setName(Data.name);
                    setEmail(Data.email);
                }}
            >
                Reset
            </button>
        </section>
    );
}
