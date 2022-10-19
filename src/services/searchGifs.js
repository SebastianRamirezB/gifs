
export const searchGifs = async (query, offset) => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${import.meta.env.VITE_TOKEN_API}&limit=30&offset=${offset}`
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
