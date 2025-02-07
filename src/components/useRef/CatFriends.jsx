import { useState, useRef } from 'react';

export default function CatFriends() {
    const [index, setIndex] = useState(0);

    const catRef = useRef(null);

    const scrollToActiveImage = (index) => {
        const node = catRef.current.childNodes[index];
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };

    return (
        <>
            <nav className="flex justify-center items-center p-8 relative">
                <button
                    className=" fixed"
                    onClick={() => {
                        let nextIndex;
                        if (index < catList.length - 1) {
                            nextIndex = index + 1;
                            setIndex(nextIndex);
                            scrollToActiveImage(nextIndex);
                        } else {
                            nextIndex = 0;
                            setIndex(nextIndex);
                            scrollToActiveImage(nextIndex);
                        }
                    }}
                >
                    Next
                </button>
            </nav>
            <div>
                <ul className="flex gap-4" ref={catRef}>
                    {catList.map((cat, i) => (
                        <li key={cat.id}>
                            <img
                                className={
                                    index === i
                                        ? 'border border-blue-500 h-60 max-w-xl '
                                        : ' h-60 max-w-xl'
                                }
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i,
    });
}
