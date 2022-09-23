import { useState } from 'react';
import { Form, Input } from './styles';

export const Search = ({ onNewSearch }) => {
    const [inputSearch, setInputSearch] = useState('');

    const handleChange = (e) => {
        setInputSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewSearch(inputSearch.trim());
        setInputSearch('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                onChange={handleChange}
                value={inputSearch}
            />
        </Form>
    );
};
