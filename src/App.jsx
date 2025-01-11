import Queue from './components/queueing-a-state-updates/Queue';
import Pending from './components/queueing-a-state-updates/Pending-complete';
import Immer from './components/updating-object-in-state/Immer';
import States from './components/reacting-to-input-with-state/States';
import StateUp from './components/sharing-state-between-components/StateUp';
import FilterableList from './components/sharing-state-between-components/FilterableList';
import Preserve from './components/preserving-and-resetting-state/Preserve';
import Reverse from './components/preserving-and-resetting-state/Reverse';
import ContactManager from './components/preserving-and-resetting-state/ContactManager';
import Gallery from './components/preserving-and-resetting-state/Gallery';
import Contacs from './components/preserving-and-resetting-state/Contacs';
import Reducer from '@/components/extacting-a-state-logic-into-a-reducer/Messenger';
import ContextApp from './components/passing-data-deeply-with-context/ContextApp';
import TodoApp from './components/todo-list/TodoApp';
import Todo from './components/todo-scratch/App';

function App() {
    return (
        <>
            {/* <div className="h-screen flex justify-center items-center flex-col gap-4"> */}
            <Todo />
            {/* </div> */}
        </>
    );
}

export default App;
