import { useState } from 'react';
import { useImmer } from 'use-immer';

const Immer = () => {
    /*  --- Only use useState ---
            const [person, setPerson] = useState({
        name: 'Redha',
        age: 22,
        job: 'Software Engineer',
        address: {
            country: 'Indonesia',
            city: 'Jakarta',
        },
    });

    const handleOnChangePerson = (e) => {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnChangeAddress = (e) => {
        setPerson({
            ...person,
            address: {
                ...person.address,
                [e.target.name]: e.target.value,
            },
        });
    };
    */

    /* --- Using use-immer ---- */
    const [person, setPerson] = useImmer({
        name: 'Redha',
        age: 22,
        job: 'Software Engineer',
        address: {
            country: 'Indonesia',
            city: 'Jakarta',
        },
    });
    const [selectedAddress, setSelectedAddress] = useState('city');

    const handleOnChangePerson = (e) => {
        setPerson((draft) => {
            draft[e.target.name] = e.target.value;
        });
    };

    const handleOnChangeAddress = (e) => {
        setPerson((draft) => {
            draft.address[selectedAddress] = e.target.value;
        });
    };

    const handleOnChangeOption = (e) => {
        setSelectedAddress(e.target.value);
    };

    return (
        <>
            <div className=" flex gap-2">
                <label htmlFor="name">Name</label>
                <input
                    value={person.name}
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleOnChangePerson}
                />
            </div>

            <div className=" flex gap-2">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={person.age}
                    onChange={handleOnChangePerson}
                />
            </div>

            <div className=" flex gap-2">
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={person.job}
                    onChange={handleOnChangePerson}
                />
            </div>

            <div className=" flex gap-2">
                <select
                    name="address"
                    id="address"
                    onChange={handleOnChangeOption}
                >
                    <option value="country">Country</option>
                    <option value="city">City</option>
                </select>
                <input
                    type="text"
                    name="adress"
                    id="adress"
                    value={person.address[selectedAddress]}
                    onChange={handleOnChangeAddress}
                />
            </div>

            <h1>Data:</h1>
            <p>
                {person.name}({person.age}) - {person.job} -{' '}
                {person.address.city}, {person.address.country}
            </p>
        </>
    );
};

export default Immer;
