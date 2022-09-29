
import { MdFavoriteBorder, MdContentCopy } from 'react-icons/md';

import { Article, Image, OverlayGif } from './styles';

export const Gif = ({ gif, onCopy, chooseFavorite }) => {
    return (
        <>

            <Article >
                <Image src={gif.img} alt={gif.title} />
                <OverlayGif>
                    <MdFavoriteBorder onClick={() => chooseFavorite(gif.id, gif.title, gif.img, gif.url)} size="3rem" />
                    <MdContentCopy onClick={() => onCopy(gif.url)} size="2.8rem" value={{ style: { cursor: 'pointer' } }} />
                </OverlayGif>
            </Article>

        </>

    );
};
