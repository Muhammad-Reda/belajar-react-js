import Queue from './components/queueing-a-state-updates/Queue';
import Pending from './components/queueing-a-state-updates/Pending-complete';

function App() {
    return (
        <>
            <div className="h-screen flex justify-center  items-center flex-col gap-2">
                <Pending />
            </div>
        </>
    );
}

export default App;
