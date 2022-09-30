import { useState, useEffect } from 'react';
import { searchGifs } from '../services/searchGifs';

export const useSearchGifs = ({ query, offset }) => {
    const [state, setstate] = useState({
        data: [],
        isLoading: true
    });

    useEffect(() => {
        if (!query) return;
        searchGifs(query, offset).then((gifs) => {
            setstate({
                data: gifs,
                isLoading: false
            });
        });
    }, [query, offset]);

    return state;
};
