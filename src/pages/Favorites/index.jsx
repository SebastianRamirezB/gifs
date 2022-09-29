import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GifList } from '../../components/GifList';
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
            <Link to="/">volver</Link>

            {
                gifs.length !== 0
                    ? <GifList gifs={gifs} toggleRendering={toggleRendering} />
                    : <h2>You have no favorite gifs</h2>
            }

        </>
    );
};

export default Favorites;
