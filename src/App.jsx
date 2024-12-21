import {
    Click,
    Form,
    Propagation,
} from './components/responding-to-events/events';

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
    };
    return (
        <>
            <div className="h-screen flex justify-center  items-center flex-col gap-2">
                <Click onClick={() => alert('Click Button')}>
                    Click Button
                </Click>
                <Form onSubmit={handleSubmit}>Send</Form>
                <Propagation />
            </div>
        </>
    );
}

export default App;
