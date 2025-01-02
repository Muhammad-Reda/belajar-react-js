function List({ items }) {
    if (!items.length) {
        return <p>Search items to display them</p>;
    }

    return (
        <table>
            <tbody>
                {items.map((food) => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default List;
