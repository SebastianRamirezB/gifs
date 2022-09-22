import { useFetchGifs } from '../../hooks/useFetchGifs';

import { Gif } from '../Gif';

import { Ul } from './styles';


export const GifList = () => {

  const {data: gifsTrending, isLoading} = useFetchGifs();
  
    
  return (
    <Ul>
       {
        isLoading 
          ? (<h1>Cargando...</h1>)
          : (gifsTrending.map(gif => (
              <Gif key={gif.id} gif={gif} />
            )))
      } 
    </Ul>
  )
}



