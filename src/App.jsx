import Queue from './components/queueing-a-state-updates/Queue';
import Pending from './components/queueing-a-state-updates/Pending-complete';
import Immer from './components/updating-object-in-state/Immer';

function App() {
    return (
        <>
            <div className="h-screen flex justify-center  items-center flex-col gap-2">
                <Immer />
            </div>
        </>
    );
}

export default App;
