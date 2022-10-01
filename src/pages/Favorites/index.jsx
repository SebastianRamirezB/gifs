import { useState, useEffect } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { GifList } from '../../components/GifList';
import { ButtonBack } from './styles';
const Favorites = () => {
    const [gifs, setGifs] = useState([]);
    const [isRendering, setIsRendering] = useState(false);

    const toggleRendering = () => {
        setIsRendering(!isRendering);
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('favorites'));
        if (data) {
            setGifs(data);
        }
    }, [isRendering]);

    return (
        <>
            <ButtonBack to="/">
                <GoArrowLeft />
                Back
            </ButtonBack>

            {
                gifs.length !== 0
                    ? <GifList gifs={gifs} toggleRendering={toggleRendering} />
                    : <h2>You have no favorite gifs</h2>
            }

        </>
    );
};

export default Favorites;
