import { useState } from 'react';

// This is a custom hook, which gives us ability to reuse this piece of code anyhwere in our app

export default initialVal => {
    const [value, setValue] = useState(initialVal);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const reset = () => {
        setValue('');
    };

    return [value, handleChange, reset];
};
