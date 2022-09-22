

const token = '2Rgff0g9ukj0USISaEW5DKVB6ZkiJdol';


export const getTrendingGifs = async () => {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${token}&limit=25`
    );
    const { data } = await response.json();

   const gifs = data.map( gif =>( 
         {
            id: gif.id,
            title: gif.title,
            img: gif.images.original.webp
        }
    ));

    return gifs;
};
