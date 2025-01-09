import { getImageUrl } from '@/lib/utils';
import { useContext } from 'react';
import { ImageSizeContext } from './Context';

function PlaceImage({ place }) {
    const imageSize = useContext(ImageSizeContext);
    console.log(imageSize);

    return (
        <img
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
    );
}

export default PlaceImage;
