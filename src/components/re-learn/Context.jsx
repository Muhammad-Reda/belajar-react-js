import { createContext, useContext, useReducer } from "react";

const ThreadContext = createContext(null);
const DispatchContext = createContext(null);

const ThreadProvider = ({ children }) => {
    const [thread, dispatch] = useReducer(thredReducer, initialContent);
    return (
        <ThreadContext.Provider value={thread}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </ThreadContext.Provider>
    );
};

const thredReducer = (state, action) => {
    switch (action.type) {
        case "like":
            return {
                ...state,
                like: (state.likes += 1),
            };
        case "editUsername":
            return {
                ...state,
                username: action.username,
            };
    }
};

const useThread = () => {
    return useContext(ThreadContext);
};

const useThreadDispatch = () => {
    return useContext(DispatchContext);
};

const initialContent = {
    username: "Redha",
    text: "Lorem ipsum 200x",
    likes: 1,
    derive: {
        username: "Derive",
        text: "Lorem ipsum derived 200x",
        likes: 1,
    },
};

export { ThreadProvider, useThread, useThreadDispatch };
