import { useState } from 'react';
import { contacts } from '@/lib/data';
import Contact from './Contact';

const Contacs = () => {
    const [reverse, setReverse] = useState(false);

    const displayedContacts = [...contacts];
    if (reverse) {
        displayedContacts.reverse();
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    value={reverse}
                    onChange={(e) => {
                        setReverse(e.target.checked);
                    }}
                />{' '}
                Show in reverse order
            </label>
            <ul>
                {displayedContacts.map((contact) => (
                    <li key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Contacs;

/*  -- SOLUSTION --
    Give the list children a key prop to tell React that each list item is unique. At the inital problem, the key prop was the index of the array, it makes React tracked the changed items by their index in the array. so, if index 0 is expanded, React will recorded that index 0 is expanded. It makes when we click the reverse ceckbox, the list will be reversed but the expanded item will be still in the same index. 
    To fix this, we need to give the contact id as the key prop to make React track the changed items by their id. So, when we click the expanded checkbox on the contact with id 1, React will recorded that the contact with id 1 is expanded. So, when we click the reverse checkbox, the list will be reversed and the expanded item will be still in the same item with id 1, and so on.
*/
