import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GifList } from '../../components/GifList';
import { Search } from '../../components/Search';

import { useSearchGifs } from '../../hooks/useSearchGifs';

import { MdFavoriteBorder } from 'react-icons/md';
import { Container, LikeIcon, NavBar } from './styles';

const Home = () => {
    const [state, setState] = useState('');

    const { data } = useSearchGifs(state);

    const onAddSearch = (query) => {
        setState(query);
    };

    return (
        <Container>
            <NavBar>
                <Search onNewSearch={onAddSearch} />
                <LikeIcon>
                    <Link to="/favorites">
                        <MdFavoriteBorder size="2.8rem" />
                    </Link>
                </LikeIcon>
            </NavBar>
            <GifList gifs={data} />
        </Container>
    );
};

export default Home;
