import { useState, useEffect } from 'react';
import { searchGifs } from '../services/searchGifs';


export const useSearchGifs = (query) => {

    const [state, setstate] = useState({
        data: [],
        isLoading: true
    });


    useEffect(() => {
        
        searchGifs(query).then((gifs) => {
            setstate({
                data: gifs,
                isLoading: false
            })
        })


    }, [query]);


    return state;

}