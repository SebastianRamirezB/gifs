
export const getTrendingGifs = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${import.meta.env.VITE_TOKEN_API}&limit=30`
    );
    const { data } = await response.json();

    const gifs = data.map(gif => (
        {
            id: gif.id,
            title: gif.title,
            img: gif.images.original.webp,
            url: gif.url
        }
    ));

    return gifs;
};
