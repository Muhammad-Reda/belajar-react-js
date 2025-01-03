import { useState } from 'react';
import Field from './Field';

const Reverse = () => {
    const [reverse, setReverse] = useState(false);
    const index = reverse
        ? [
              { key: 1, label: 'Last name' },
              { key: 0, label: 'First name' },
          ]
        : [
              { key: 0, label: 'First name' },
              { key: 1, label: 'Last name' },
          ];

    return (
        <>
            <Field key={index[0].key} label={index[0].label} />
            <Field key={index[1].key} label={index[1].label} />
            <label htmlFor="input">
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                    checked={reverse}
                    onChange={(e) => setReverse(e.target.checked)}
                />{' '}
                Reverse order
            </label>
        </>
    );
};

export default Reverse;
