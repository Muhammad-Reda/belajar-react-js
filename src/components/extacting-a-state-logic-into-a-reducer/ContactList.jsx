export default function ContactList({ contacts, selectedId, dispatch }) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: 'changed_selection',
                                    contactId: contact.id,
                                });
                            }}
                        >
                            {selectedId === contact.id ? (
                                <i style={{ color: 'black' }}>{contact.name}</i>
                            ) : (
                                contact.name
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}
