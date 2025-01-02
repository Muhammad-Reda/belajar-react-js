import { useState } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import { foods, filterItems } from '@/lib/data';

export default function FilterableList() {
    const [query, setQuery] = useState('');
    const items = filterItems(foods, query);

    function handleChange(e) {
        setQuery(e.target.value);
    }
    console.log(query);

    return (
        <>
            <SearchBar query={query} onChange={handleChange} />
            <hr />
            <List items={items} />
        </>
    );
}
