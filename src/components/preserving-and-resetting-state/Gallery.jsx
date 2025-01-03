import { useState } from 'react';
import { images } from '@/lib/data';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const hasNext = index < images.length - 1;
    const hasPrev = index > 0;

    function handleClickNext() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function handleClickPrev() {
        if (hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(images.length - 1);
        }
    }

    let image = images[index];

    return (
        <>
            <button type="button" onClick={handleClickPrev}>
                Prev
            </button>
            <button onClick={handleClickNext}>Next</button>
            <h3>
                Image {index + 1} of {images.length}
            </h3>
            <img key={image.src} src={image.src} width={'250px'} />
            <p>{image.place}</p>
        </>
    );
}
