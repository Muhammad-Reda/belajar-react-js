import Place from './Place';
import { places } from '@/lib/data';

function List() {
    const listItems = places.map((place) => (
        <li key={place.id}>
            <Place place={place} />
        </li>
    ));
    return <ul>{listItems}</ul>;
}

export default List;
