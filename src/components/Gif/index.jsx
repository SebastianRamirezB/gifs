import { Article, IconCopy, IconLike, Image, OverlayGif } from './styles';

export const Gif = ({ gif, onCopy, chooseFavorite, isFavorite }) => {
    return (
        <>

            <Article >
                <Image src={gif.img} alt={gif.title} />
                <OverlayGif>
                    <IconLike onClick={() => chooseFavorite(gif.id, gif.title, gif.img, gif.url)} color={isFavorite ? '#EC7272' : '#eeeeee'} />
                    <IconCopy onClick={() => onCopy(gif.url)} />
                </OverlayGif>
            </Article>

        </>

    );
};
