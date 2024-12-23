import { sculptureList } from '@/lib/data';
import { useState } from 'react';

const State = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleClickNext = () => {
        if (index >= sculptureList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const handleClickShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <button type="button" onClick={handleClickNext}>
                Next
            </button>

            <div className="img">
                <h1>
                    {sculptureList[index].name} by {sculptureList[index].artist}
                </h1>
                <p>
                    ({index + 1} of {sculptureList.length})
                </p>
                <button type="button" onClick={handleClickShowMore}>
                    Show More
                </button>
                {showMore && <p>{sculptureList[index].description}</p>}
                <img
                    src={sculptureList[index].url}
                    alt={sculptureList[index].alt}
                />
            </div>
        </>
    );
};

export default State;
