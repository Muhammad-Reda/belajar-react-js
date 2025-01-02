function Input({ label, text, onChange }) {
    return (
        <label>
            {label} <input value={text} onChange={onChange} />
        </label>
    );
}

export default Input;
