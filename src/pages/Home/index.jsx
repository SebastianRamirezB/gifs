import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GifList } from '../../components/GifList';
import { Search } from '../../components/Search';

import { useSearchGifs } from '../../hooks/useSearchGifs';

import { MdFavoriteBorder } from 'react-icons/md';
import { Container, LikeIcon, NavBar } from './styles';
import { Pagination } from '../../components/Pagination';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState({
        query: '',
        offset: 0
    });

    const { data } = useSearchGifs(searchQuery);
    const onAddSearch = (query) => {
        setSearchQuery({
            query,
            offset: 0
        });
    };

    const onNextPage = () => {
        setSearchQuery({
            ...searchQuery,
            offset: searchQuery.offset + 30
        });
    };
    const onPreviousPage = () => {
        setSearchQuery({
            ...searchQuery,
            offset: searchQuery.offset === 0 ? 0 : searchQuery.offset - 30
        });
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
            {data.length > 1 && <Pagination onNextPage={onNextPage} onPreviousPage={onPreviousPage} dataSearch={searchQuery} />}
        </Container>
    );
};

export default Home;
