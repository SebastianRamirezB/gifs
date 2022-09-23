import { useState } from 'react';

import { GifList } from '../../components/GifList';
import { Search } from '../../components/Search';
import { useSearchGifs } from '../../hooks/useSearchGifs';

const Home = () => {
    const [state, setState] = useState('');

    const { data } = useSearchGifs(state);

    const onAddSearch = (query) => {
        setState(query);
    };

    return (
        <>
            <Search onNewSearch={onAddSearch} />
            <GifList gifs={data} />
        </>
    );
};

export default Home;
