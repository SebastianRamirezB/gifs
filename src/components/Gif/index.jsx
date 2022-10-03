import { useState, useEffect } from 'react';
import { Notification } from '../Notification';
import { Article, IconCopy, IconLike, Image, OverlayGif } from './styles';

export const Gif = ({ gif, onCopy, chooseFavorite, isFavorite }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <>

            <Article >
                <Image src={gif.img} alt={gif.title} />
                <OverlayGif>
                    <IconLike onClick={() => chooseFavorite(gif.id, gif.title, gif.img, gif.url)} color={isFavorite ? '#EC7272' : '#eeeeee'} />
                    <IconCopy onClick={() => {
                        onCopy(gif.id);
                        setIsVisible(true);
                    }} />
                </OverlayGif>
                {isVisible && <Notification />}
            </Article>

        </>

    );
};
