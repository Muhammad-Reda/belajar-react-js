import { useState, useRef } from "react";
import { useThread, useThreadDispatch } from "./Context";

const Content = () => {
    const data = useThread();
    const dispatch = useThreadDispatch();

    const intervalRef = useRef(null);
    const inputRef = useRef(null);

    const [showReply, setShowReply] = useState(false);
    const [now, setNow] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [editUsername, setEditUsername] = useState(false);
    const [username, setUsername] = useState(data.username);
    let time = 0;

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    const handleClear = () => {
        clearInterval(intervalRef.current);
        setNow(null);
        time = 0;
    };

    if (now !== null && startTime !== null) {
        time = (now - startTime) / 1000;
    }

    return (
        <>
            <div className=" border border-black container flex flex-col  items-center h-screen gap-4 ">
                <div className="border border-yellow-700 reply-container flex flex-col justify-center items-center gap-4 h-screen">
                    <div className=" border border-red-700 reply w-screen h-2/4 flex flex-col justify-between">
                        <div className="flex">
                            {editUsername ? (
                                <input
                                    ref={inputRef}
                                    className=" border border-black h-fit w-32 p-4"
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            ) : (
                                <p className=" h-fit w-32 p-4">
                                    {data.username}
                                </p>
                            )}

                            <button
                                type="button"
                                onClick={() => {
                                    setEditUsername(!editUsername);
                                    if (setEditUsername) {
                                        dispatch({
                                            type: "editUsername",
                                            username,
                                        });
                                    }
                                }}
                            >
                                Edit
                            </button>
                        </div>
                        <p className=" p-4">Time: {time.toFixed(3)}</p>
                        <div className="flex gap-8 justify-center items-center">
                            <button type="button" onClick={handleStart}>
                                Start
                            </button>
                            <button type="button" onClick={handleStop}>
                                Stop
                            </button>
                            <button type="button" onClick={handleClear}>
                                Clear
                            </button>
                        </div>
                        <div className="buttons border border-pink-700 p-4 grid grid-rows-1 grid-cols-2 gap-4">
                            <div className=" flex gap-8">
                                <button
                                    type="button "
                                    onClick={() =>
                                        dispatch({
                                            type: "like",
                                        })
                                    }
                                >
                                    Likes {data.likes}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowReply(!showReply)}
                                >
                                    Reply
                                </button>
                            </div>
                            <button
                                type="button"
                                className=" justify-self-end "
                            >
                                Share
                            </button>
                        </div>
                    </div>
                    {showReply && (
                        <div className=" border border-green-700 derive-reply w-screen h-2/4 flex flex-col justify-between">
                            <p className=" h-fit w-fit p-4">Username</p>
                            <p className=" p-4">Text</p>
                            <div className="buttons border border-pink-700 p-4 grid grid-rows-1 grid-cols-2 gap-4">
                                <div className=" flex gap-8">
                                    <button type="button">Like</button>
                                    <button type="button">Reply</button>
                                </div>
                                <button
                                    type="button"
                                    className=" justify-self-end "
                                >
                                    Share
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Content;
