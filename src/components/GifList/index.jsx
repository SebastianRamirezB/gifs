
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { Gif } from '../Gif';

import { Ul } from './styles';

export const GifList = ({ gifs }) => {
    const { data: gifsTrending, isLoading } = useFetchGifs();

    console.log(gifs);

    const gifsToShow = gifs.length === 0 ? gifsTrending : gifs;

    return (
        <Ul>
            {
                isLoading
                    ? (<h1> Cargando...</h1>)
                    : (gifsToShow.map(gif => (
                        <Gif key={gif.id} gif={gif} />
                    )))
            }
        </Ul>
    );
};
