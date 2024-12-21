const Click = ({ onClick, children }) => {
    return (
        <>
            <div className="click">
                <button
                    onClick={onClick}
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {children}
                </button>
            </div>
        </>
    );
};

const Form = ({ onSubmit, children }) => {
    return (
        <>
            <div className="form">
                <form action="" className="flex gap-2 p-2">
                    <input
                        type="text"
                        name="text"
                        id="text"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    />
                    <Click onClick={onSubmit}>{children}</Click>
                </form>
            </div>
        </>
    );
};

const Propagation = () => {
    return (
        <>
            <div
                className=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => alert('Click Parent')}
            >
                <Click
                    onClick={(e) => {
                        e.stopPropagation();
                        alert('Click Children');
                    }}
                >
                    Button Children
                </Click>
                <Form
                    onSubmit={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        alert('Click Form Children');
                    }}
                >
                    Form Button
                </Form>
            </div>
        </>
    );
};

export { Click, Form, Propagation };
