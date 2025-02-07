import { useRef, useEffect } from 'react';

const Effects = () => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog.showModal();
        return () => dialog.close();
    }, []);

    return (
        <>
            <div className=" flex justify-center items-center">
                <dialog
                    ref={dialogRef}
                    className=" flex justify-center items-center"
                >
                    <p>ahai</p>
                </dialog>
            </div>
        </>
    );
};

export default Effects;
