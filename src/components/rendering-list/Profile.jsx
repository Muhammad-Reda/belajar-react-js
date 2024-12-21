import { people } from '@/lib/data';

const Profile = () => {
    return (
        <>
            <h1>List Scientist</h1>
            <br />
            <ol>
                {people.map((person) => (
                    <li key={person.id} className="flex flex-col">
                        {person.name} - {person.profession}
                    </li>
                ))}
            </ol>
        </>
    );
};

export default Profile;
