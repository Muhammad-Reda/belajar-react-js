import { useState } from 'react';
import List from './List';
import { ImageSizeContext } from './Context';

export default function ContextApp() {
    const [isLarge, setIsLarge] = useState(false);
    const imageSize = isLarge ? 150 : 100;
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={isLarge}
                    onChange={(e) => {
                        setIsLarge(e.target.checked);
                    }}
                />
                Use large images
            </label>
            <hr />
            <ImageSizeContext.Provider value={imageSize}>
                <List />
            </ImageSizeContext.Provider>
        </>
    );
}
