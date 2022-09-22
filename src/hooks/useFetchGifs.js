import { useState, useEffect } from 'react';
import { getTrendingGifs } from '../services/getTrendingGifs';

export const useFetchGifs = () => {

    const [state, setState] = useState({

        data: [],
        isLoading: true,

    });


    useEffect(() => {

        getTrendingGifs().then((gifs) => {
            
            setState({

                data: gifs,
                isLoading: false,

            });
        });

    }, []);

    return state;
};
