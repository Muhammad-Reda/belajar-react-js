import { useReducer } from 'react';
import Chat from '@/components/extacting-a-state-logic-into-a-reducer/Chat';
import ContactList from '@/components/extacting-a-state-logic-into-a-reducer/ContactList';
import { initialState, messengerReducer } from './messengerReducer';
import { contacts } from '@/lib/data.js';

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const contact = contacts.find((c) => c.id === state.selectedId);
    const message = state.message[contact.id] || '';
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat
                key={contact.id}
                message={message}
                contact={contact}
                dispatch={dispatch}
            />
        </div>
    );
}
