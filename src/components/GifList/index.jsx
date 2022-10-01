import { useState, useEffect } from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { Gif } from '../Gif';
import { Skeleton } from '../Skeleton';

import { Ul } from './styles';

export const GifList = ({ gifs, toggleRendering = () => {} }) => {
    const [favoritesGifs, setFavoritesGifs] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const { data: gifsTrending, isLoading } = useFetchGifs();

    const gifsToShow = gifs.length === 0 ? gifsTrending : gifs;

    const onCopy = async (url) => {
        await navigator.clipboard.writeText(url)
            .catch(() => console.log('No se pudo Copiar'));
    };

    const chooseFavorite = (
        id,
        title,
        img,
        url) => {
        if (favoritesGifs.find(gif => gif.id === id)) {
            const gifs = favoritesGifs.filter(gif => gif.id !== id);
            setFavoritesGifs(gifs);
            toggleRendering();
            return;
        }
        setFavoritesGifs([...favoritesGifs, {
            id,
            title,
            img,
            url
        }]);
    };
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoritesGifs));
    }, [favoritesGifs]);

    return (

        <Ul>
            {
                isLoading
                    ? (<Skeleton />)
                    : (gifsToShow.map(gif => {
                        const isFavorite = favoritesGifs.find(g => g.id === gif.id);
                        return (
                            <Gif
                                key={gif.id}
                                gif={gif}
                                onCopy={onCopy}
                                chooseFavorite={chooseFavorite}
                                isFavorite={isFavorite}
                            />
                        );
                    }))
            }
        </Ul>

    );
};
