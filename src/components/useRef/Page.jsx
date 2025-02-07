import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

import { useRef } from 'react';

export default function Page() {
    const focusRef = useRef(null);

    const handleClick = () => {
        focusRef.current.focus();
        console.log(focusRef);
    };

    return (
        <>
            <div className=" flex flex-col gap-4 justify-center items-center">
                <nav>
                    <SearchButton onClick={handleClick} />
                </nav>
                <SearchInput ref={focusRef} />
            </div>
        </>
    );
}
