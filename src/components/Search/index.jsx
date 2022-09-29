import { useState } from 'react';
import { ButtonSearch, Form, Input } from './styles';

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
                placeholder='Search Gifs'
                onChange={handleChange}
                value={inputSearch}
            />
            <ButtonSearch>Search</ButtonSearch>
        </Form>
    );
};
